import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { playerPlay, oneloop } from '../../Player/index'
import { NO_LOOP,  ONE_LOOP, ALL_VOICE_LOOP, PLAYLIST_LOOP } from '../../config/enmu'
import { getAudioSecond } from '../../utils/index'
import {
    createPlayingAction,
    createPlayStopAction,
    createAddPlayerlistAction,
    createRemovePlayerlistItemAction,
    createAddPlaylistAction,
    createRemovePlaylistItemAction
} from '../../store/actions/audio'

import 'animate.css';

function VoiceBtn(props) {
    const {onevoice, lang} = props;
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.handlePlaylist);
    const playing = useSelector(state => state.playingVoice);
    const playerlist = useSelector(state => state.handlePlayerlist);
    const leftTopRef = useRef(null);
    const leftBotRef = useRef(null);
    const midTopRef = useRef(null);
    const midBotRef = useRef(null);
    const rightTopRef = useRef(null);
    const rightBotRef = useRef(null);
    const wrapper = useRef(null);

    const cbAddPlayingList = (audioEl) => {
        dispatch(createAddPlayerlistAction(audioEl));
    }

    const cbRemovePlayandPlayerList = () => {
        dispatch(createRemovePlaylistItemAction());
        dispatch(createRemovePlayerlistItemAction());
    }

    // 结束voice回调
    const cbstopVoice = () => {
        // 当前播放音频
        const loopState = playing.isLoop;
        stopAnim();
        if(loopState === NO_LOOP){
            if(playlist.length === 1){
                dispatch(createPlayStopAction());
            }
            cbRemovePlayandPlayerList();
        }
        if(loopState === ONE_LOOP){
            oneloop(playerlist.pop());
        }
    }

    // playAnimation cb
    const cbPlayAnima = (audio) => {
        const pieceTime = getAudioSecond(audio.duration) / 6;
        midTopRef.current.style = `--piece: ${pieceTime}s`;
        rightTopRef.current.style = `--piece: ${pieceTime}s`;
        rightBotRef.current.style = `--piece: ${pieceTime}s`;
        midBotRef.current.style = `--piece: ${pieceTime}s`;
        leftBotRef.current.style = `--piece: ${pieceTime}s`;
        leftTopRef.current.style = `--piece: ${pieceTime}s`;
    }

    // stop anima
    const stopAnim = () => {
        wrapper.current.classList.remove('wrapper-click');
        midTopRef.current.style = rightTopRef.current.style = rightBotRef.current.style = midBotRef.current.style = leftBotRef.current.style = leftTopRef.current.style = '';
    }

    // 播放voice
    const playVoice = () => {
        wrapper.current.classList.add('wrapper-click');
        dispatch(createPlayingAction(onevoice));
        dispatch(createAddPlaylistAction(onevoice));
        playerPlay(onevoice, cbAddPlayingList, cbstopVoice, cbPlayAnima);
    }
    
    return ( 
        <div className="btn-wrapper" ref={wrapper}>
            <div className="left-mask mask">
                <div className="left-top-mask" ref={leftTopRef}></div>
                <div className="left-bottom-mask" ref={leftBotRef}></div>
            </div>
            <div className="middle-mask-container mask">
                <div className="middle-top-mask" ref={midTopRef}></div>
                <div className="middle-bottom-mask" ref={midBotRef}></div>
            </div>
            <div className="right-mask mask">
                <div className="right-top-mask" ref={rightTopRef}></div>
                <div className="right-bottom-mask" ref={rightBotRef}></div>
            </div>
            <div className="mask-gray mask"></div>
            <a onClick={playVoice} className="btn-name"><FormattedMessage id={lang}></FormattedMessage></a>
        </div>
     );
}

export default VoiceBtn;