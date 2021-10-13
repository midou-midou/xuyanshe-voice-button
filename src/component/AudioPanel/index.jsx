import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider, FormattedMessage } from 'react-intl';
import { stop, oneloop, allloop, playerPlay } from '../../Player/index';
import { NO_LOOP, ALL_VOICE_LOOP, ONE_LOOP, PLAYLIST_LOOP } from '../../config/enmu'
import { getTargArr } from '../../utils/index'
import {
    createPlayStopAction,
    createGetPlayingAction,
    createRemoveAllPlayerlistAction,
    createRemovePlaylistAction,
    createPlayerStateAction,
    createAddPlayerlistAction,
    createAddWillPlaylistAction,
    createRemoveWillPlaylistAction,
    createInitWillPlaylistAction,
    createPlayingAction,
    createAddPlaylistAction,
    createRemovePlaylistItemAction,
    createRemovePlayerlistItemAction
} from '../../store/actions/audio'

function AudioPanel(props) {
    const { up } = props;
    const loopInfo = useRef(null);
    const playstopBtn = useRef(null);
    const loopBtn = useRef(null);
    const randomBtn = useRef(null);
    const dispatch = useDispatch();
    const playing = useSelector(state => state.playingVoice);
    const playlist = useSelector(state => state.handlePlaylist);
    const playerlist = useSelector(state => state.handlePlayerlist);
    const willPlist = useSelector(state => state.handleWillPlaylist);
    const lang = useSelector((state) => state.getLang);
    var index = 0;  // 待播放列表index

    useEffect(() => {
        dispatch(createInitWillPlaylistAction(getTargArr(up)));
        return () => {
            dispatch(createRemoveWillPlaylistAction());
        }
    },[])
    
    // 停止所有音频
    const stopAllVoice = () => {
        // play anima
        playstopBtn.current.className = "audioPanel-playstop cbtn-bg-click";
        playstopBtn.current.firstChild.className = "fas fa-stop-circle control-btn-click";
        dispatch(createPlayStopAction());
        if(stop(playerlist)){
            dispatch(createRemoveAllPlayerlistAction());
            dispatch(createRemovePlaylistAction());
        }
        new Promise((resolve, reject) => {
            resolve()
        }).then(() => {
            setInterval(() => {
                playstopBtn.current.className = "audioPanel-playstop";
                playstopBtn.current.firstChild.className = "fas fa-stop-circle";
            }, 3000)
        })
    }

    const cbChangePlayingState = (voice) => {
        dispatch(createPlayingAction(voice));
    }

    const cbAddPlayingList = (audioEl) => {
        dispatch(createAddPlayerlistAction(audioEl));
    }

    // random 结束voice回调
    const cbstopVoice = () => {
        // 当前播放音频
        const loopState = playing.isLoop;
        if(loopState === NO_LOOP){
            if(playlist.length === 1){
                dispatch(createPlayStopAction());
            }
            dispatch(createRemovePlaylistItemAction());
            dispatch(createRemovePlayerlistItemAction());
        }
        if(loopState === ONE_LOOP){
            oneloop(playerlist.pop());
        }
    }

    // 播放列表顺序播放
    const cbautoPlayNext = () => {
        index+=1;
        if(!willPlist[index]){
            dispatch(createPlayStopAction());
            return;
        }
        cbChangePlayingState(willPlist[index]);
        dispatch(createAddPlaylistAction(willPlist[index]));
        playerPlay(willPlist[index], cbAddPlayingList, cbautoPlayNext, () => {});
    }

    // 循环 loop
    const changeLoopState = () => {
        // play anima
        loopBtn.current.className = "audioPanel-loop cbtn-bg-click";
        loopBtn.current.firstChild.className = "fas fa-undo-alt control-btn-click";

        new Promise((resolve, reject) => {
            resolve()
        }).then(() => {
            setInterval(() => {
                loopBtn.current.className = "audioPanel-loop";
                loopBtn.current.firstChild.className = "fas fa-undo-alt";
            }, 3000)
        })

        // dispatch
        let loopState = playing.isLoop;
        if(loopState === ALL_VOICE_LOOP){
            loopState = NO_LOOP;
        }else{
            loopState += 1;
        }
        dispatch(createPlayerStateAction(loopState));
        
        // icon change & player behavior
        switch(loopState){
            case ALL_VOICE_LOOP:
                loopInfo.current.innerText = "循环当前页面全部音频";
                cbChangePlayingState(willPlist[index]);
                dispatch(createAddPlaylistAction(willPlist[index]));
                playerPlay(willPlist[index],cbAddPlayingList, cbautoPlayNext, () => {});
                break;
            case ONE_LOOP:
                loopInfo.current.innerText = "无限循环当前播放";
                if(playerlist.length !== 0){
                    oneloop(playerlist.pop());
                }
                break;
            case NO_LOOP:
                loopInfo.current.innerText = "啥都不循环";
                break;
        }
    }

    // random 盲盒
    const random = () => {
        // play anima
        randomBtn.current.className = "audioPanel-random cbtn-bg-click";
        randomBtn.current.firstChild.className = "fas fa-random control-btn-click";

        let hit = Math.floor(Math.random() * (willPlist.length - 1));
        cbChangePlayingState(willPlist[hit]);
        dispatch(createAddPlaylistAction(willPlist[hit]));
        playerPlay(willPlist[hit], cbAddPlayingList, cbstopVoice, () => {});

        new Promise((resolve, reject) => {
            resolve()
        }).then(() => {
            setInterval(() => {
                randomBtn.current.className = "audioPanel-random";
                randomBtn.current.firstChild.className = "fas fa-random";
            }, 3000)
        })
    }
    
    return ( 
        <div className="audioPanel-container">
                <IntlProvider locale={lang} messages={playing.voice.desc || {zh: "还没有要播放的音频呢", en: "no music", jp: ""}}>
                    <div className="audioinfo animate__animated animate__zoomIn">
                        <FormattedMessage id={lang}></FormattedMessage>
                    </div>
                </IntlProvider>
            <div className="audioControl-container">
                <div className="audioPanel-playstop" ref={playstopBtn} onClick={stopAllVoice} title="别走"><i className="fas fa-stop-circle"></i></div>
                <div className="audioPanel-loop" ref={loopBtn} onClick={changeLoopState} title="洗脑"><i className="fas fa-undo-alt"></i></div>
                <div className="audioPanel-random" ref={randomBtn} onClick={random} title="盲盒"><i className="fas fa-random"></i></div>
            </div>
            <div className="loopInfo"><span ref={loopInfo}>啥都不循环</span></div>
        </div>
     );
}

export default AudioPanel;