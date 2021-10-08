import { GET_VUPDATA } from '../constant'

// handle data
import vupData from '../../config/vupdata'

export default function vupDataReducer(preState=vupData, action){
    const { type, data } = action;
    switch(type){
        case GET_VUPDATA:
            return null;
        default:
			return preState
    }
}