import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE,
    ADDPLAYERLIST,
    REMOVEPLAYERLISTITEM,
    REMOVEPLAYERLIST,
    ADDPLAYLIST,
    REMOVEPLAYLIST,
    REMOVEPLAYLISTITEM,
    ADDWILLPLAYLIST,
    REMOVEWILLPLAYLIST,
    INITWILLPLAY
} from '../constant'

// 播放器相关
export const createPlayingAction = data => ({type: PLAYINGVOICE, data});
export const createPlayStopAction = () => ({type: STOPVOICE});
export const createPlayerStateAction = data => ({type: LOOPONEVOICE, data})
// 播放器列表 相关
export const createAddPlayerlistAction = data => ({type: ADDPLAYERLIST, data});
export const createRemovePlayerlistItemAction = () => ({type: REMOVEPLAYERLISTITEM});
export const createRemoveAllPlayerlistAction = () => ({type: REMOVEPLAYERLIST});
// 播放列表 相关
export const createAddPlaylistAction = data => ({type: ADDPLAYLIST, data});
export const createRemovePlaylistItemAction = () => ({type: REMOVEPLAYLISTITEM});
export const createRemovePlaylistAction = () => ({type: REMOVEPLAYLIST});

export const createAddWillPlaylistAction = data => ({type: ADDWILLPLAYLIST, data});
export const createRemoveWillPlaylistAction = () => ({type: REMOVEWILLPLAYLIST})
export const createInitWillPlaylistAction = data => ({type: INITWILLPLAY, data});
