// handle data
import vupData from '../../config/vupdata'

export default function vupDataReducer(preState=vupData, action){
    const { type } = action;
    switch(type){
        default:
			return preState
    }
}