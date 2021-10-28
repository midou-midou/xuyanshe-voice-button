import { pathComplete } from "../utils";

function playerPlay(voice, addlistcb, stopcb, playAnimecb){
    const audio = new Audio();
    audio.src = pathComplete(voice);
    audio.preload = 'meta';
    audio.load();
    addlistcb(voice, audio);
    audio.oncanplay = () => {
        playAnimecb(audio);
        audio.play().then(() => {
            console.log("music playing");
        })
    }
    audio.onended = () => {
        console.log("music stop");
        stopcb();
    }
    audio.onerror = () => {
        console.error("音频播放失败");
    }
}

function stop(audioEls){
    if(audioEls.length === 0){
        return false;
    }
    audioEls.forEach((el) => {
        el.pause();
    })
    return true;
}

function oneloop(audioEL){
    if(!audioEL){
        console.error("播放器不存在");
        return;
    }
    audioEL.loop = true;
    audioEL.play();
}

// function playlistLoop(){
// 
// }

export {
    playerPlay,
    stop,
    oneloop
}