import { 
    ADDPLAYERLIST,
    REMOVEPLAYERLISTITEM,
    REMOVEPLAYERLIST
} from '../constant'

// 播放器数据
// playingList : HTMLAudioElement Array
var playingList = [];

export default function playerlistReducer(preState = playingList, action){
    const { data, type } = action;
    switch(type){
        case ADDPLAYERLIST:
            preState.push(data);
            return preState;
        case REMOVEPLAYERLISTITEM:
            preState.shift();
            return preState;
        case REMOVEPLAYERLIST:
            preState = [];
            return preState;
        default:
            return preState;
    }
}