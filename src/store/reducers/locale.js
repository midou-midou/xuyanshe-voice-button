import { CHANGE_LANG } from '../constant'
import zh from '../../locale/zh'

var locale = 'zh';

export default function langReducer(preState = locale, action){
    const {type, data} = action;
    switch(type){
        case CHANGE_LANG:
           return preState = data;
        default:
            return preState;
    }
}