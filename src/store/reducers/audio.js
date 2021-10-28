import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE,
    CLEARVOICEINFO,
    RANDOMVOICE,
    CHANGEPLAYINGINDEX
} from '../constant'
import { NO_LOOP } from '../../config/enmu'

// 播放器数据 播放器维护当前播放的最新Voice
// playingVoice : 当前播放的Voice
// voice: 当前播放源
// isPlay: 播放器状态
// isLoop: 播放器循环状态

var playingVoice = {
    voice: {},
    isPlay: false,
    isAllStop: false,
    isLoop: NO_LOOP,
    playingIndex: -1,
    hitIndex: -1,
    playingList: []
};

export default function playerReducer(preState = playingVoice, action){
    const { data, type } = action;
    let newState;
    switch(type){
        case PLAYINGVOICE:
            preState = Object.assign(preState, {voice: data.onevoice});
            preState.isPlay = true;
            preState.isAllStop = false;
            preState.playingIndex = data.currentIndex;
            preState.playingList.push(data.onevoice);
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case LOOPONEVOICE:
            preState.isLoop = data;
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case STOPVOICE:
            preState.isPlay = false;
            preState.isAllStop = true;
            preState.isLoop = NO_LOOP;
            preState.voice = JSON.parse(JSON.stringify({}));
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case CHANGEPLAYINGINDEX:
            preState.playingIndex = data;
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case RANDOMVOICE:
            preState = Object.assign(preState, {voice: data.onevoice});
            preState.isPlay = true;
            preState.hitIndex = data.hitIndex;
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        case CLEARVOICEINFO:
            preState.voice = JSON.parse(JSON.stringify({}));
            preState.playingIndex = -1;
            newState = JSON.parse(JSON.stringify(preState));
            return newState;
        default:
            return preState;
    }
}