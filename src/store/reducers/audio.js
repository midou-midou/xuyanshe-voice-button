import { 
    PLAYINGVOICE,
    LOOPONEVOICE,
    STOPVOICE,
    CLEARVOICEINFO,
    RANDOMVOICE,
    CHANGEPLAYINGINDEX,
    SETPERMUTATIONSTATE,
    SETPERMUTATIONLIST,
    ADDPERMUTATIONLISTITEM,
    CHANGEPLAYINGSTATE,
    CHANGEPLAYERINFO
} from '../constant'
import { NO_LOOP } from '../../config/enmu'

// 播放器数据 播放器维护当前播放的最新Voice
// playingVoice : 当前播放的Voice
// voice: 当前播放源
// isPlay: 播放器状态
// isLoop: 播放器循环状态
// playingIndex: 当前播放的音声Index
// hitIndex: 随机命中的音声Index
// playingList: 播放的音声列表

var playingVoice = {
    voice: {path: '', desc: {zh: "还没有要播放的音频呢", en: "no music", jp: "再生中のオーディオはありません"}},
    isPlay: false,
    isAllStop: false,
    isLoop: NO_LOOP,
    isPermutation: false,
    playingIndex: -1,
    hitIndex: -1,
    playingList: [],
    permutationList: []
};

export default function playerReducer(preState = playingVoice, action){
    const { data, type } = action;
    // 播放器相关
    if(type === PLAYINGVOICE){
        preState = Object.assign(preState, {voice: data.onevoice});
        preState.isPlay = true;
        preState.isAllStop = false;
        preState.playingIndex = data.currentIndex;
        preState.playingList.push(data.onevoice);
    }
    if(type === LOOPONEVOICE){
        preState.isLoop = data;
    }
    if(type === STOPVOICE){
        preState.isPlay = false;
        preState.isAllStop = true;
        preState.isLoop = NO_LOOP;
        preState.voice = JSON.parse(JSON.stringify({path: '', desc: {zh: "还没有要播放的音频呢", en: "no music", jp: "再生中のオーディオはありません"}}));
    }
    if(type === CHANGEPLAYINGINDEX){
        preState.playingIndex = data;
    }
    if(type === RANDOMVOICE){
        preState = Object.assign(preState, {voice: data.onevoice});
        preState.isPlay = true;
        preState.hitIndex = data.hitIndex;
    }
    if(type === CLEARVOICEINFO){
        preState.voice = JSON.parse(JSON.stringify({path: '', desc: {zh: "还没有要播放的音频呢", en: "no music", jp: "再生中のオーディオはありません"}}));
        preState.isPlay = false;
        preState.playingIndex = -1;
    }
    if(type === CHANGEPLAYINGSTATE){
        preState.isPlay = !preState.isPlay;
    }
    if (type === CHANGEPLAYERINFO){
        preState.voice.desc = Object.assign(preState.voice.desc, data);
    }
    // 排列组合相关
    if(type === SETPERMUTATIONSTATE){
        preState.isPermutation = !preState.isPermutation;
        if(!preState.isPermutation){
            preState.voice = JSON.parse(JSON.stringify({path: '', desc: {zh: "还没有要播放的音频呢", en: "no music", jp: "再生中のオーディオはありません"}}));
            preState.permutationList = [];
            preState.isPlay = false;
        }else{
            preState.voice = JSON.parse(JSON.stringify({path: '', desc: {zh: "正在使用排列组合，如要退出，请再次点击排列组合按钮", en: "no music", jp: "カスタムオーディオで連続再生中  止めたいなら  機能ボタンを再度クリックしてください"}}));
        }
    }
    if(type === SETPERMUTATIONLIST){
        preState.permutationList = data;
    }
    if(type === ADDPERMUTATIONLISTITEM){
        preState.permutationList.push(data);
    }
    let newState = JSON.parse(JSON.stringify(preState));
    return newState;
}