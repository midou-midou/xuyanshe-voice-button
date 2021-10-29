// 播放器枚举
// ONE_LOOP: 单曲循环 
// ALL_VOICE_LOOP：全部voice循环 
// NO_LOOP: 不循环  
// PLAYLIST_LOOP：当前播放列表循环
const loopState = {
    NO_LOOP: 0,
    ONE_LOOP: 1,
    ALL_VOICE_LOOP: 2,
    PLAYLIST_LOOP: 3
} 

// 直播间状态
// NO_LIVE: 没开播
// LIVEING: 直播中
// LOOP_PLAY: 轮播中
// 更多资料请查看 
// https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/live/info.md
const liveState = {
    NO_LIVE: 0,
    LIVEING: 1,
    LOOP_PLAY: 2
}

exports.ALL_VOICE_LOOP = loopState.ALL_VOICE_LOOP;
exports.NO_LOOP = loopState.NO_LOOP;
exports.ONE_LOOP = loopState.ONE_LOOP;
exports.PLAYLIST_LOOP = loopState.PLAYLIST_LOOP;

exports.NO_LIVE = liveState.NO_LIVE;
exports.LIVEING = liveState.LIVEING;
exports.LOOP_PLAY = liveState.LOOP_PLAY;