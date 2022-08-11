import {createStore, combineReducers, applyMiddleware} from 'redux'
import vupDataReducer from './reducers/vupdata'
import voiceReducer from './reducers/voice'
import siteReducer from './reducers/site'
import langReducer from './reducers/locale'
import playerReducer from './reducers/audio'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const allReducer = combineReducers({
	getVupData: vupDataReducer,
	getVoiceData: voiceReducer,
	getSiteInfo: siteReducer,
	getLang: langReducer,
	playingVoice: playerReducer
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));