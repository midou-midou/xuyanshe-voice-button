import {
    ADDWILLPLAYLIST,
    REMOVEWILLPLAYLIST,
    INITWILLPLAY
} from '../constant'
const willplaylist =[];
export default function willPlayReducer(preState = willplaylist, action){
    const { data, type } = action;
    switch(type){
        case INITWILLPLAY:
            preState = data;
            return preState;
        case ADDWILLPLAYLIST:
            preState.push(data);
            return preState;
        case REMOVEWILLPLAYLIST:
            preState = [];
            return preState;
        default:
            return preState;
    }
}