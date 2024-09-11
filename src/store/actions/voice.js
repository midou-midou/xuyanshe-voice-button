import { GETVOICEDATA } from "../constant"
import site from "../../config/siteInfo"

export const getVoiceData = (data) => ({type: GETVOICEDATA, data})


export const getVoiceDataASync = (data) => {
    return async dispatch => {
        let res = await (await fetch(`${site.cloud}/api/voice?owner=${data}`, {
            mode: 'cors'
        })).json()
        dispatch(getVoiceData({name: data, voice: res, isLoading: true}))
    }
}
