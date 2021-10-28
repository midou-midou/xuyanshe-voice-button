import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE,
    CHANGEPLAYINGINDEX,
    RANDOMVOICE,
    CLEARVOICEINFO
} from '../constant'

// 播放器相关 actions
export const createPlayingAction = data => ({type: PLAYINGVOICE, data});
export const createPlayStopAction = () => ({type: STOPVOICE});
export const createPlayerStateAction = data => ({type: LOOPONEVOICE, data});
export const createChangePlayingIndex = data => ({type: CHANGEPLAYINGINDEX, data});
export const createClearPlayerInfo = data => ({type: CLEARVOICEINFO, data});
export const createRandomAction = data => ({type: RANDOMVOICE, data});
