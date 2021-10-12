import site from '../config/siteInfo'
import voiceData from '../config/voice'
// import http from 'http'

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

// desc: 从Voice中获取对应up的声音
// arg: sour up主名字
const getTargArr = (sour) => {
    if(!voiceData[sour]){
        console.error(`${sour}不存在`);
        return;
    }
    var targetArr = [];
    voiceData[sour].map((clfyVoice, k) => {
        targetArr = [...targetArr, ...clfyVoice.voice];
    })
    return targetArr;
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
const getBiliProfileUrl = (biliId) => {
    if(!biliId){
        console.error(`${biliId}不存在`);
        return;
    }
    biliId = parseInt(biliId);
    // TODO: fetch 403 问题
    // const profileUrl = await (await fetch(`http://localhost:3000/bApi?mid=${biliId}`)).json();
    const profileUrl = "https://static.xiaoblogs.cn/img/head.jpg";
    return profileUrl;
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
        console.log(x, y);
        ctx.fillText(danmu.toString(), x, y);
    })
}

// find item
const findVup = (arr, hit) => {
    if(arr.length === 0 || !hit){
        return;
    }
    var findone;
    for(var i=0;;++i){
        if(arr[i].name === hit){
            findone = arr[i];
            break;
        }
    }
    return findone;
}

export {
    pathComplete,
    getTargArr,
    getAudioSecond,
    getBiliProfileUrl,
    drawDanmu,
    findVup
}