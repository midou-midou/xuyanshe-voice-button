import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE,
    CHANGEPLAYINGINDEX,
    RANDOMVOICE,
    CLEARVOICEINFO,
    SETPERMUTATIONSTATE,
    SETPERMUTATIONLIST,
    ADDPERMUTATIONLISTITEM,
    CHANGEPLAYINGSTATE,
    CHANGEPLAYERINFO
} from '../constant'

// 播放器相关 actions
export const createPlayingAction = data => ({type: PLAYINGVOICE, data});
export const createPlayStopAction = () => ({type: STOPVOICE});
export const createPlayerStateAction = data => ({type: LOOPONEVOICE, data});
export const createChangePlayingIndex = data => ({type: CHANGEPLAYINGINDEX, data});
export const createClearPlayerInfo = data => ({type: CLEARVOICEINFO, data});
export const createRandomAction = data => ({type: RANDOMVOICE, data});
export const createChangePlayerState = () => ({type: CHANGEPLAYINGSTATE});
export const createChangePlayerInfo = data => ({type: CHANGEPLAYERINFO, data});
// 排列组合相关
export const createSetPermutationStateAction = () => ({type: SETPERMUTATIONSTATE});
export const createSetPermutationListAction = data => ({type: SETPERMUTATIONLIST, data});
export const createSetPermutationListItemAction = data => ({type: ADDPERMUTATIONLISTITEM, data});
