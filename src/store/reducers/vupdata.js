// handle data
import vupData from '../../config/vupdata'

export default function vupDataReducer(preState=vupData, action){
    const { type, data } = action;
    switch(type){
        default:
			return preState
    }
}