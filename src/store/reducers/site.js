import site from '../../config/siteInfo';
import {
    SETSITETHEME,
    GETSITETHEME
} from '../constant'

export default function siteReducer(preState=site, action){
    const {type, data} = action;
    // preState.prototype.sitetheme = 'xiaoxi';
    let newState;
    if(type === SETSITETHEME){
        preState.sitetheme = data;
        newState = JSON.parse(JSON.stringify(preState));
        return newState;
    }
    if(type === GETSITETHEME){
        newState = JSON.parse(JSON.stringify(preState));
        return newState;
    }
    return preState;
}