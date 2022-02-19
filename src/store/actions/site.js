import {
    SETSITETHEME,
    GETSITETHEME
} from '../constant'

export const createSetSiteThemeAction = data => ({type: SETSITETHEME, data});
export const createGetSiteThemeAction = data => ({type: GETSITETHEME});