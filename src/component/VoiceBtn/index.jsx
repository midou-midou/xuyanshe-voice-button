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
    createClearPlayerInfo
} from '../../store/actions/audio'

import 'animate.css';

class VoiceBtn extends Component {
    
    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = { 
            animaList: [],
            isPlay: false,
            isAllStop: storeState.playingVoice.isAllStop,
            isLoop: storeState.playingVoice.isLoop,
            playingIndex: storeState.playingVoice.playingIndex,
            hitIndex: storeState.playingVoice.hitIndex,
            playerList: []
        }
        this.voiceButton = createRef();
    }

    // 挂载
    componentDidMount(){
        store.subscribe(() => {
            const storeState = store.getState();
            this.setState(() => ({
                isAllStop: storeState.playingVoice.isAllStop,
                isLoop: storeState.playingVoice.isLoop,
                playingIndex: storeState.playingVoice.playingIndex,
                hitIndex: storeState.playingVoice.hitIndex
            }));
        });
    }

    // 更新后
    componentDidUpdate(prevProps, prevState){  
        // 选取当前播放的音声
        if(this.props.currentIndex === this.state.playingIndex){
            this.watchPlayState(this.props.onevoice, prevState);
        }
    }

    // 监听按钮状态
    watchPlayState = (voice, prevState) => {
        if(this.state.isAllStop){
            this.stopVoice()
            return;
        }else if(this.props.currentIndex === this.state.hitIndex && !this.state.isPlay){
            this.randomVoice();
            return;
        }else if(this.state.isPlay){
            if(this.state.playerList.length > 0){
                this.voiceButton.current.classList.remove('wrapper-click');
                this.voiceButton.current.classList.add('wrapper-click');
            }
            if(this.state.playerList.length === 0){
                this.voiceButton.current.classList.remove('wrapper-click');
            }
        }else if(!this.state.isPlay){
            this.voiceButton.current.classList.remove('wrapper-click');
            switch(this.state.isLoop){
                case NO_LOOP:
                    store.dispatch(createClearPlayerInfo());
                    return;
                case ONE_LOOP:
                    this._playerPlay(voice);
                    return;
                case ALL_VOICE_LOOP:
                    this._playerPlay(voice, this.loopAll);
                    return;
                default:
                    return;
            }
        }
        
    }

    // 停止按钮音声
    stopVoice = () => {
        this.voiceButton.current.classList.remove('wrapper-click');
        if(this.state.playerList.length !== 0){
            this.state.playerList.map((item, key) => item.pause());
        }
        store.dispatch(createChangePlayingIndex(-1));
        this.setState({
            isPlay: false,
            playerList: JSON.parse(JSON.stringify([]))
        })
    }

    // 点击播放音声
    playVoice = () => {
        this._playerPlay(this.props.onevoice, 
            () => {this.voiceButton.current.classList.remove('wrapper-click')},
            () => {store.dispatch(createPlayingAction({onevoice: this.props.onevoice, currentIndex: this.props.currentIndex}))}
        );
    }

    // 随机播放音声
    randomVoice = () => {
        this._playerPlay(
            this.props.onevoice,
            () => {},
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
        audio.preload = 'meta';
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
            this.setState({
                playerList: [..._playerList]
            })
            if(stopcb){
                stopcb();
            }
            if(this.state.playerList.length === 0){
                this.setState({isPlay: false})
            }
        }
        audio.onerror = () => {
            console.error("音频播放失败");
        }
    }

    render() { 
        return ( 
            <div className="btn-wrapper" ref={this.voiceButton}>
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
                <a onClick={this.playVoice} className="btn-name"><FormattedMessage id={this.props.lang}></FormattedMessage></a>
            </div>
        );
    }
}
 
export default VoiceBtn;