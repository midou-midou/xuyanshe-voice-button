import { Fragment, useEffect } from "react";

function Console() {
    useEffect(() => {
        console.log(
           `%c欢迎来到 %c虚%c研%c社%c按%c钮`,
           'padding:0 0 0 1rem',
           'color: #CD3951;',
           'color: #bba5d7;',
           'color: #89dedb;',
           'color: #a272f4;',
           'color: #fdc888;padding:0 1rem 0 0'
        );
        console.log(
            `%cGitHub: %chttps://github.com/MIMONATCH/xuyanshe-voice-button`,
            'color: #259dd4;padding:0 0 0 1rem',
            'color: #259dd4'
        );
        console.log(
            `%cGitee: %chttps://gitee.com/mimonarchrd/xuyanshe-voice-button`,
            'color: #259dd4;padding:0 0 0 1rem',
            'color: #259dd4'
        );
        console.log(
            `%c欢迎提交PR、Issue`,
            'padding:0 0 0 1rem'
        );

    })
    
    return ( <Fragment></Fragment> );
}

export default Console;