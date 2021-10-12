import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE
} from '../constant'
import { NO_LOOP, ALL_VOICE_LOOP, ONE_LOOP, PLAYLIST_LOOP } from '../../config/enmu'

// 播放器数据 播放器维护当前播放的最新Voice
// playingVoice : 当前播放的Voice
// voice: 当前播放源
// isPlay: 播放器状态
// isLoop: 播放器循环状态

var playingVoice = {
    voice: {},
    isPlay: false,
    isLoop: NO_LOOP
};

export default function playerReducer(preState = playingVoice, action){
    const { data, type } = action;
    switch(type){
        case PLAYINGVOICE:
            preState = Object.assign(preState, {voice: data});
            preState.isPlay = true;
            var newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case LOOPONEVOICE:
            preState.isLoop = data;
            var newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case STOPVOICE:
            preState.isPlay = !preState.isPlay;
            preState.voice = JSON.parse(JSON.stringify({}));
            var newState = JSON.parse(JSON.stringify(preState));
            return newState;
        default:
            return preState;
    }
}