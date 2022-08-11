import { GETVOICEDATA } from '../constant';

export default function voiceReducer(preState={}, action){
    const { type, data } = action
    if(type === GETVOICEDATA){
        if(!preState[data.name]){
            preState[data.name] = {}
        }
        Object.assign(preState, data.voice)
        let newState = JSON.parse(JSON.stringify(preState));
        return newState
    }
    return preState
}