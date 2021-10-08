import {createStore, combineReducers} from 'redux'
import vupDataReducer from './reducers/vupdata'
import voiceReducer from './reducers/voice'
import siteReducer from './reducers/site'

const allReducer = combineReducers({
	getVupData: vupDataReducer,
	getVoiceData: voiceReducer,
	getSiteInfo: siteReducer
})

export default createStore(allReducer)