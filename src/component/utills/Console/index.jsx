import { Fragment, useEffect } from "react";

function Console() {
    useEffect(() => {
        console.log(
           `%c欢迎来到 %c虚%c研%c社%c按%c钮`,
           'color: white;background-color:#202124;padding:0 0 0 1rem',
           'color: #CD3951;background-color:#202124',
           'color: #bba5d7;background-color:#202124',
           'color: #89dedb;background-color:#202124',
           'color: #a272f4;background-color:#202124',
           'color: #fdc888;background-color:#202124;padding:0 1rem 0 0'
        );
        console.log(
            `%c  `,
            'background: url(https://static.xiaoblogs.cn/img/ai.png) no-repeat; font-size:162px;line-height:162px'
        )
        console.log(
            `%cGitHub: %chttps://github.com/MIMONATCH/xuyanshe-voice-button`,
            'color: #259dd4;background-color:#202124;padding:0 0 0 1rem',
            'color: #259dd4'
        );
        console.log(
            `%cGitee: %chttps://gitee.com/mimonarchrd/xuyanshe-voice-button`,
            'color: #259dd4;background-color:#202124;padding:0 0 0 1rem',
            'color: #259dd4'
        );
        console.log(
            `%c欢迎提交PR、Issue`,
            'color: white;background-color:#202124;padding:0 0 0 1rem'
        );

    })
    
    return ( <Fragment></Fragment> );
}

export default Console;