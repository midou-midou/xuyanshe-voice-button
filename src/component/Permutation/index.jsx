import { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import store from '../../store/store';
import { message } from "antd";
import { pathComplete } from '../../utils/index';
import {
    createSetPermutationStateAction,
    createChangePlayerState
} from '../../store/actions/audio'

class Permutation extends Component {
    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = { 
            lang: storeState.getLang,
            isPlayerPlaying: storeState.playingVoice.isPlay,
            isPermanution: storeState.playingVoice.isPermutation,
            permutationList: storeState.playingVoice.permutationList,
            sitetheme: storeState.getSiteInfo.sitetheme,
            audioCtx: new (window.AudioContext),
            pendingList: [],
            nextTime: 0,
            isPlay: false,
            current: 0,
            isGetVoiceFromXHR: false
        };
    }

    // 订阅store
    componentDidMount(){
        store.subscribe(() => {
          const storeState = store.getState();
            this.setState({
                lang: storeState.getLang,
                isPermanution: storeState.playingVoice.isPermutation,
                permutationList: storeState.playingVoice.permutationList,
                sitetheme: storeState.getSiteInfo.sitetheme,
                isPlayerPlaying: storeState.playingVoice.isPlay
            })  
        })
    }

    componentDidUpdate(){
        if(this.state.isPlay){
            // pending list item decode
            this.play(this.state.current);
            return;
        }
        // 获取排列组合音声
        if(this.state.isGetVoiceFromXHR){
            this.playPermutationListVoice()
        }
    }

    // 全删除
    clearAllVoice = () => {
        if(this.isPlay){
            message.warning("请等待当前列表播放完成后重试");
            return;
        }
        // 当前播放音频暂停
        this.setState({
            audioCtx: new (window.AudioContext),
            isPlay: false,
            current: 0,
            nextTime: 0,
            pendingList: [],
            isGetVoiceFromXHR: false
        })
        // dispatch清空action
        store.dispatch(createSetPermutationStateAction());
        store.dispatch(createChangePlayerState());
    }

    // 播放相关
    playPermutationListVoice = () => {
        if(this.state.isPlay){
            message.warning("请等待当前音声播放完成后重试");
            return;
        }
        // 循环xhr获取的arraybuffer list
        if(this.state.permutationList.length !== 0){
            if(this.state.permutationList.length === this.state.pendingList.length){
                return;
            }
            let voiceData = this.state.permutationList[this.state.current]
            let path = pathComplete(voiceData.data)
            this.getVoiceFromPerlist2pending(path)
        }else{
            message.error("添加几个音频后再试");
            return;
        }
    }

    play = (index) => {
        if(index >= this.state.permutationList.length){
            this.setState({
                isPlay: false,
                current: 0,
                pendingList: [],
                nextTime: 0
            })
            store.dispatch(createChangePlayerState());       
            return;
        }
        let buf = this.state.pendingList[index];
        this.state.audioCtx.decodeAudioData(buf, buf => {
            if(this.state.pendingList[index]){
                if(!this.state.isPlay){
                    return;
                }
                let source = this.state.audioCtx.createBufferSource();
                source.buffer = buf;
                source.connect(this.state.audioCtx.destination);
                source.start(this.state.nextTime);
                source.onended = ()=> {
                    this.setState({
                        nextTime: source.buffer.duration,
                        current: index + 1
                    });
                }
            }
        }, () => {
            message.error("当前音频"+index+"播放错误");
            return;
        });
    }

    // xhr获取arraybuffer
    getVoiceFromPerlist2pending = (path) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = () => {
            // XHR完成响应
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    this.setState({
                        pendingList: [...this.state.pendingList, xhr.response],
                        current: this.state.current + 1,
                        isGetVoiceFromXHR: true
                    })
                    if(this.state.pendingList.length === this.state.permutationList.length){
                        store.dispatch(createChangePlayerState());
                        this.setState({
                            isPlay: true,
                            current: 0,
                            isGetVoiceFromXHR: false
                        })
                    }
                }else{
                    message.error("获取音频失败,reason:"+xhr.responseText);
                    return;
                }
            }
        }
        xhr.send();
    }
    
    render() { 
        if(this.state.permutationList.length !== 0){
            return ( 
                <div className="per-panel-container">
                    <div className={`per-btnlist-container ${this.state.sitetheme}`}>
                        <div className="per-btnlist">
                            {
                                this.state.permutationList.map((v, k) => (
                                    <div className="btn-per-mask" key={k}>
                                        <div className={`btn-wrapper btn-per ${v.theme}`}>
                                            <div className="btn-name">
                                                <IntlProvider locale={this.state.lang} messages={v.data.desc}>
                                                    <FormattedMessage id={this.state.lang}></FormattedMessage>
                                                </IntlProvider>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="per-control">
                        <div className="per-play" onClick={this.playPermutationListVoice}><i className="iconfont icon-bofang"></i></div>
                        <div className="per-delete" onClick={this.clearAllVoice}><i className="iconfont icon-a-shanchu"></i></div>
                    </div>
                </div>
            );
        }else{
            return ( 
                <div className="per-panel-container">
                    <div className="per-btnlist-container"></div>
                    <div className="per-control"></div>
                </div>
            );
        }
    }
}

export default Permutation;