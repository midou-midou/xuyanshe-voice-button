import {
    ADDPLAYLIST,
    REMOVEPLAYLIST,
    REMOVEPLAYLISTITEM
} from '../constant'

// 播放列表 
var playingList = [];

export default function playlsitReducer(preState = playingList, action){
    const { data, type } = action;
    switch(type){
        case ADDPLAYLIST:
            preState.push(data);
            return preState;
        case REMOVEPLAYLIST:
            preState = [];
            return preState;
        case REMOVEPLAYLISTITEM:
            preState.shift();
            return preState;
        default:
            return preState;
    }
}