import site from '../config/siteInfo'
import { NO_LIVE } from '../config/enmu';

// 组合Voice路径
const pathComplete = (voice) => {
    var base_url = site.cloud || "%PUBLIC_URL%/voice/";
    if(site.cloud){
        base_url = site.cloud.slice(-1) === '/' ? base_url : base_url.concat('/');
    }
    if(voice.path.slice(-4) !== '.mp3'){
        return null;
    }
    base_url = base_url.concat(voice.path);
    return base_url;
}

// 格式化音频时间
const getAudioSecond = (dura) => {
    if(!dura){
        return;
    }
    var second = Math.round(dura % 60);
    return second;
}

// 获取bili头像
const getBiliProfileUrl = async (biliId) => {
    if(!biliId){
        console.error(`${biliId}不存在`);
        return;
    }
    biliId = parseInt(biliId);
    try{
        const res = await (await fetch(`https://xysbtn.xiaoblogs.cn/userinfo?mid=${biliId}`, {referrerPolicy: 'no-referrer'})).json();
        const profileUrl = res.data.face.toString();
        return profileUrl;
    }catch(err){
        console.log("请求出错",err);
    }
}

// 获取bili直播间info
const getBiliLive = async (liveroomId) => {
    if(!liveroomId){
        console.error(`${liveroomId}不存在`);
        return;
    }
    let state = NO_LIVE;
    try{
        const livedata = await (await fetch(`https://xysbtn.xiaoblogs.cn/live?id=${liveroomId}`, {referrerPolicy:'no-referrer'})).json();
        state = livedata.data.live_status;
    }catch(err){
        console.log("请求出错",err);
    }
    return state;
}

// 绘制canvas弹幕
const drawDanmu = (canvas, danmulist, style) => {
    if(!canvas || !danmulist){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = style;
    ctx.font = '30px Hiragino Sans GB';
    danmulist.map((danmu, k) => {
        let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 200);
        ctx.fillText(danmu.toString(), x, y);
        return null;
    })
}

// find item
const findVup = (arr, hit) => {
    if(arr.length === 0 || !hit){
        return;
    }
    for(var i=0;;++i){
        if(arr[i].alias === hit){
            return arr[i]
        }
    }
}

export {
    pathComplete,
    getAudioSecond,
    getBiliProfileUrl,
    drawDanmu,
    findVup,
    getBiliLive
}
