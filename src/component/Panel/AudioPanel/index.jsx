import { Component, createRef } from "react";
import { connect } from "react-redux";
import PubSub from 'pubsub-js';
import { IntlProvider, FormattedMessage } from 'react-intl';
import store from '../../../store/store';
import { NO_LOOP, ALL_VOICE_LOOP, ONE_LOOP } from '../../../config/enmu'
import {
    createPlayStopAction,
    createPlayerStateAction,
    createRandomAction,
    createPlayingAction
} from '../../../store/actions/audio'

class AudioPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingList: [],
            playList: new Map(),
            playListIndex: [],
            loopInfo: ['啥都不循环','单曲循环','循环当前页面全部音频']
        }
        this.playstopbtn = createRef();
        this.loopbtn = createRef();
        this.randombtn = createRef();
        this.timer = setTimeout(()=>{},1000);
    }

    // 初始化播放列表
    initPlayList = () => {
        let _playlist = new Map();
        let _playlistIndex = [];
        this.props.voice.map((tags, clifkey) => 
            tags.voice.map((oneSound, voiceKey) => (
                _playlist.set(clifkey*100+voiceKey, oneSound),
                _playlistIndex.push(clifkey*100+voiceKey)
            ))
        )
        this.setState(()=>({
            playList: _playlist,
            playListIndex: [..._playlistIndex]
        }))
    }

    // 监听store & 设置所有播放列表 & 订阅AllLoop next voice
    componentDidMount(){
        store.subscribe(() => {
            const storeState = store.getState();
            this.setState({
                playingList: [...storeState.playingVoice.playingList]
            })
        });
        this.initPlayList();
        PubSub.subscribe('nextVoice', () => {
            this.AllLoop();
        })
    }

    // 组件更新后执行
    componentDidUpdate(){
        switch(this.props.isLoop){
            case NO_LOOP:
                return;
            case ONE_LOOP:
                return;
            case ALL_VOICE_LOOP:
                if(this.props.playingIndex === -1){
                    this.AllLoop();
                }
                return;
            default:
                return;
        }
    }

    // 卸载
    componentWillUnmount(){
        PubSub.unsubscribe('nextVoice');
        clearTimeout(this.timer);
    }

    // audioPanel 相关操作
    // 停止音频播放 
    stopAllVoice = () => {
        this.playAnima(this.playstopbtn);
        this.props.stopAll();
    }

    // 全部循环
    AllLoop = () => {
        let key = this.state.playListIndex.indexOf(this.props.playingIndex) + 1;
        let currentIndex = this.state.playListIndex[parseInt(key)];
        if(this.state.playList.has(currentIndex)){
            this.props.playingAction({onevoice: this.state.playList.get(currentIndex), currentIndex: currentIndex});
        }else{
            // console.log("没有拿到音频，或者是音频已播放完毕");
            this.props.loop(NO_LOOP);
        }
    }
    
    // 随机播放
    random = () => {
        this.playAnima(this.randombtn);
        this.props.stopAll();
        let hit = Math.floor(Math.random() * ( this.state.playListIndex.length - 1 ));
        let currentIndex = this.state.playListIndex[hit];
        if(this.state.playList.has(currentIndex)){
            this.props.randomVoice({onevoice: this.state.playList.get(currentIndex), hitIndex: currentIndex});
            this.props.playingAction({onevoice: this.state.playList.get(currentIndex), currentIndex: currentIndex});
        }
    }

    // 单曲、全部循环
    changeLoopState = () => {
        this.playAnima(this.loopbtn);
        this.props.stopAll();
        switch(this.props.isLoop){
            case NO_LOOP:
                this.props.loop(ONE_LOOP);
                return;
            case ONE_LOOP:
                this.props.loop(ALL_VOICE_LOOP);
                return;
            default:
                this.props.loop(NO_LOOP);
                return;
        }
    }

    // 播放动画 & 清除动画
    playAnima = (myref) => {
        myref.current.classList.add('cbtn-bg-click');
        myref.current.firstChild.classList.add('control-btn-click');
        this.timer = setTimeout(() => {
            myref.current.classList.remove('cbtn-bg-click');
            myref.current.firstChild.classList.remove('control-btn-click');
        }, 1000)
    }
    
    render() { 
        return ( 
            <div className="audioPanel-container">
                <IntlProvider locale={this.props.lang} messages={this.props.playingVoiceData.desc || {zh: "还没有要播放的音频呢", en: "no music", jp: ""}}>
                    <div className="audioinfo animate__animated animate__zoomIn">
                        <FormattedMessage id={this.props.lang}></FormattedMessage>
                    </div>
                </IntlProvider>
                <div className="audioControl-container">
                    <div className="audioPanel-playstop"  onClick={this.stopAllVoice} ref={this.playstopbtn} title="别走"><i className="fas fa-stop-circle"></i></div>
                    <div className="audioPanel-loop"  onClick={this.changeLoopState} ref={this.loopbtn} title="洗脑"><i className="fas fa-undo-alt"></i></div>
                    <div className="audioPanel-random"  onClick={this.random} ref={this.randombtn} title="盲盒"><i className="fas fa-random"></i></div>
                </div>
                <div className="loopInfo"><span>{this.state.loopInfo[this.props.isLoop]}</span></div>
            </div>
        );
    }
}

// container component
export default connect(
    state => ({
        isPlay: state.playingVoice.isPlay,
        isLoop: state.playingVoice.isLoop,
        playingVoiceData: state.playingVoice.voice,
        playingIndex: state.playingVoice.playingIndex,
        lang: state.getLang
    }),
    {
        stopAll: createPlayStopAction,
        playingAction: createPlayingAction,
        loop: createPlayerStateAction,
        randomVoice: createRandomAction
    }
)(AudioPanel);
