import {createStore, combineReducers} from 'redux'
import vupDataReducer from './reducers/vupdata'
import voiceReducer from './reducers/voice'
import siteReducer from './reducers/site'
import langReducer from './reducers/locale'
import playerReducer from './reducers/audio'

const allReducer = combineReducers({
	getVupData: vupDataReducer,
	getVoiceData: voiceReducer,
	getSiteInfo: siteReducer,
	getLang: langReducer,
	playingVoice: playerReducer
})

export default createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());