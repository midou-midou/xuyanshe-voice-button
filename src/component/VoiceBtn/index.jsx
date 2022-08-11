import { Component, createRef } from 'react';
import PubSub from 'pubsub-js';
import { FormattedMessage } from 'react-intl';
import store from '../../store/store';
import { NO_LOOP,  ONE_LOOP, ALL_VOICE_LOOP } from '../../config/enmu';
import { getAudioSecond, pathComplete } from '../../utils/index';
import {
    createPlayingAction,
    createChangePlayingIndex,
    createRandomAction,
    createClearPlayerInfo,
    createSetPermutationListItemAction
} from '../../store/actions/audio'

import 'animate.css';
import 'antd/dist/antd.css'
import { message } from 'antd';

class VoiceBtn extends Component {
    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = {
            animaList: [],
            isPlay: false,
            isPlayerPlaying: storeState.playingVoice.isPlay,
            isAllStop: storeState.playingVoice.isAllStop,
            isLoop: storeState.playingVoice.isLoop,
            playingIndex: storeState.playingVoice.playingIndex,
            hitIndex: storeState.playingVoice.hitIndex,
            permunationState: storeState.playingVoice.isPermutation,
            playerList: []
        }
        this.voiceButton = createRef();
    }

    // 挂载
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            const storeState = store.getState().playingVoice;
            this.setState(() => ({
                isAllStop: storeState.isAllStop,
                isLoop: storeState.isLoop,
                playingIndex: storeState.playingIndex,
                hitIndex: storeState.hitIndex,
                permunationState: storeState.isPermutation,
                isPlayerPlaying: storeState.isPlay
            }));
        });
    }

    // 更新后
    componentDidUpdate(prevProps, prevState){
        // i18n
        if(this.props.lang !== prevProps.lang){
            return null;
        }
        // stop当前音声
        if(this.state.isAllStop && prevState.isAllStop !== this.state.isAllStop){
            this.stopVoice();
            return;
        }
        // 选取当前播放的音声
        if(this.props.currentIndex === this.state.playingIndex){
            this.watchPlayState(this.props.onevoice);
            return;
        }
    }

    // 卸载
    componentWillUnmount(){
        this.unsubscribe()
        if(this.props.currentIndex === this.state.playingIndex){
            if(this.state.playerList.length !== 0){
                this.state.playerList.map((item, key) => item.pause());
            }
            store.dispatch(createChangePlayingIndex(-1));
        }
    }

    // 监听按钮状态
    watchPlayState = (voice) => {
        if(this.props.currentIndex === this.state.hitIndex && !this.state.isPlay){
            this.randomVoice();
            return;
        }else if(this.state.isPlay){
            if(this.state.playerList.length > 0){
                this.voiceButton.current.classList.add('wrapper-click');
                return;
            }
        }else if(!this.state.isPlay){
            switch(this.state.isLoop){
                case NO_LOOP:
                    store.dispatch(createClearPlayerInfo());
                    return;
                case ONE_LOOP:
                    // this._playerPlay(voice);
                    this.playVoice();
                    return;
                case ALL_VOICE_LOOP:
                    this._playerPlay(voice, () => {
                        this.loopAll();
                        this.clearAnimation();
                    });
                    return;
                default:
                    return;
            }
        }

    }

    // 停止按钮音声
    stopVoice = () => {
        if(this.state.isPlay){
            this.clearAnimation()
            if(this.state.playerList.length !== 0){
                this.state.playerList.map((item, key) => item.pause());
            }
            store.dispatch(createChangePlayingIndex(-1));
            this.setState({
                isPlay: false,
                playerList: JSON.parse(JSON.stringify([]))
            })
            return;
        }else{
            return;
        }
    }

    // 点击播放音声
    playVoice = () => {
        // 排列组合模式开启
        if(this.state.permunationState){
            if(this.state.isPlayerPlaying){
                message.error("请等待当前列表播放完毕后在添加");
                return;
            }
            store.dispatch(createSetPermutationListItemAction({theme: this.props.theme, data: this.props.onevoice}));
            return;
        }
        this._playerPlay(this.props.onevoice,
            () => {this.clearAnimation()},
            () => {
                store.dispatch(createPlayingAction({onevoice: this.props.onevoice, currentIndex: this.props.currentIndex}));
                this.emitDanmu();
            }
        );
    }

    // 随机播放音声
    randomVoice = () => {
        this._playerPlay(
            this.props.onevoice,
            () => {this.clearAnimation()},
            () => {store.dispatch(createRandomAction({onevoice: this.props.onevoice, hitIndex: -1}))}
        );
    }

    // 全部循环音声
    loopAll = () => {
        PubSub.publishSync('nextVoice');
    }

    // audio播放音声
    _playerPlay = (voice, stopcb, playcb) => {
        const audio = new Audio();
        audio.src = pathComplete(voice);
        // audio.preload = 'metadata';
        audio.load();
        let _playerList = this.state.playerList;
        _playerList.push(audio);
        audio.oncanplay = () => {
            // console.log("music can play");
            const pieceTime = getAudioSecond(audio.duration) / 6;
            this.setState({
                isPlay: true,
                playerList: [..._playerList],
                piece: pieceTime
            })
            if(playcb){
                playcb();
            }
            audio.play().then(() => {
                // console.log("music playing");
            })
        }
        audio.onended = () => {
            // console.log("music stop");
            let _playerList = this.state.playerList;
            _playerList.shift();
            if(stopcb){
                stopcb();
            }
            this.setState({
                playerList: [..._playerList],
                isPlay: false
            })
        }
        audio.onerror = () => {
            message.error("音频播放失败");
        }
    }

    // 发送随机音声弹幕
    emitDanmu = () => {
        PubSub.publishSync('emitDanmu', {isShowHowUseInfo: false});
    }

    // clear animation
    clearAnimation = () => {
        if(this.voiceButton.current !== null){
            this.voiceButton.current.classList.remove('wrapper-click');
        }
    }

    render() {
        return (
            <div className="btn-wrapper" ref={this.voiceButton} onClick={this.playVoice}>
                <div className="left-mask mask">
                    <div className="left-top-mask" style={{'--piece': this.state.piece+'s'}}></div>
                    <div className="left-bottom-mask" style={{'--piece': this.state.piece+'s'}}></div>
                </div>
                <div className="middle-mask-container mask">
                    <div className="middle-top-mask" style={{'--piece': this.state.piece+'s'}}></div>
                    <div className="middle-bottom-mask" style={{'--piece': this.state.piece+'s'}}></div>
                </div>
                <div className="right-mask mask">
                    <div className="right-top-mask" style={{'--piece': this.state.piece+'s'}}></div>
                    <div className="right-bottom-mask" style={{'--piece': this.state.piece+'s'}}></div>
                </div>
                <div className="mask-gray mask"></div>
                <div className="btn-name"><FormattedMessage id={this.props.lang}></FormattedMessage></div>
            </div>
        );
    }
}

export default VoiceBtn;
