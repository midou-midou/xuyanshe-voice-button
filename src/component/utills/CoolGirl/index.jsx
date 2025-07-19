import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathComplete } from "../../../utils";
import store from "../../../store/store";
import { createChangePlayerInfo, createPlayStopAction, createPlayingAction } from "../../../store/actions/audio";

function CoolGirl() {
  const onevoice = {
    path: 'coolgirl.mp3',
    desc: {zh: 'Cool Girl', en: 'Cool Girl', jp: 'Cool Girl'}
  }
  const [isPlay, setPlayState] = useState(false)
  const [audio, setAudioState] = useState(null)
  const audioControlStore = useSelector((state) => state.playingVoice)
  const dispatch = useDispatch()
  
  store.subscribe(() => {
    if (isPlay && !audioControlStore.isPlay) {
      audio.pause()
    }
  })

  const play = () => {
    let audioCache = new Audio()
    audioCache.preload = 'auto'
    // load music
    audioCache.src = pathComplete(onevoice)
    setAudioState(audioCache)
    
    if (isPlay) {
      return;
    }
    if (audioCache.readyState !== HTMLMediaElement.HAVE_FUTURE_DATA) {
      audioCache.load()
    }
    
    audioCache.oncanplay = () => {
      // play music
      audioCache.play().then(() => {
        dispatch(createPlayingAction({onevoice}))
        setPlayState(true)
      })
    }

    audioCache.onerror = () => {
      dispatch(createChangePlayerInfo({zh: "音频播放失败", en: '', jp: ''}));
    }

    audioCache.onended = () => {
      setPlayState(false)
      dispatch(createPlayStopAction())
    }
    
    audioCache.onpause = () => {
      setPlayState(false)
      dispatch(createPlayStopAction())
    }

  }

  return (
    <div className="btn-wrapper btn-support cool-girl-btn" onClick={play}>
      <span className="btn-name">Cool Girl</span>
    </div>
  );
}

export default CoolGirl;