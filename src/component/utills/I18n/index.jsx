import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    createChangeLangAction
} from '../../../store/actions/locale'

function I18n() {
    const lang = useSelector((state) => state.getLang);
    const [locale, setLocale] = useState({zh: '中文', en: 'English', jp: '日本'});
    const droplist = useRef(null);
    const dispatch = useDispatch();
    
    const changezhLang = () => {
        dispatch(createChangeLangAction('zh'));
        isShowList();
    }

    // const changeenLang = () => {
    //     dispatch(createChangeLangAction('en'));
    // }

    // const changejpLang = () => {
    //     dispatch(createChangeLangAction('jp'));
    // }

    const isShowList = () => {
        droplist.current.classList.toggle('active');
    }
    
    // TODO: 翻译完成后需要添加事件
    return ( 
        <div className="i18n-container">
            <div className="i18n-show" onClick={isShowList}>
                <div className="i18n-earth">
                    <svg t="1635664713005" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4786" width="20" height="20"><path d="M512 512m-466.56 0a466.56 466.56 0 1 0 933.12 0 466.56 466.56 0 1 0-933.12 0Z" fill="#6CB9FF" p-id="4787"></path><path d="M512 998C244.02 998 26 779.98 26 512S244.02 26 512 26s486 218.02 486 486-218.02 486-486 486z m0-933.12C265.45 64.88 64.88 265.46 64.88 512S265.45 959.12 512 959.12 959.12 758.54 959.12 512 758.55 64.88 512 64.88z" fill="#FFFFFF" p-id="4788"></path><path d="M250.73 512a261.27 466.56 0 1 0 522.54 0 261.27 466.56 0 1 0-522.54 0Z" fill="#6CB9FF" p-id="4789"></path><path d="M512 998c-157.42 0-280.72-213.48-280.72-486S354.58 26 512 26s280.72 213.48 280.72 486S669.42 998 512 998z m0-933.12c-133.35 0-241.84 200.58-241.84 447.12S378.65 959.12 512 959.12 753.84 758.54 753.84 512 645.35 64.88 512 64.88z" fill="#FFFFFF" p-id="4790"></path><path d="M92.1 703.29h839.8" fill="#6CB9FF" p-id="4791"></path><path d="M92.1 683.85h839.79v38.88H92.1z" fill="#FFFFFF" p-id="4792"></path><path d="M92.1 320.71h839.8" fill="#6CB9FF" p-id="4793"></path><path d="M92.1 301.27h839.79v38.88H92.1z" fill="#FFFFFF" p-id="4794"></path><path d="M45.44 512h933.12" fill="#6CB9FF" p-id="4795"></path><path d="M45.44 492.56h933.12v38.88H45.44z" fill="#FFFFFF" p-id="4796"></path><path d="M512 978.56V45.44" fill="#6CB9FF" p-id="4797"></path><path d="M492.56 45.44h38.88v933.12h-38.88z" fill="#FFFFFF" p-id="4798"></path></svg>            
                </div>
                <div className="i18n-info">{locale[lang]}</div>
            </div>
            <div className="i18n-droplist" ref={droplist}>
                <div className="i18n-item" onClick={changezhLang} >{locale['zh']}</div>
                <div className="i18n-item" style={{cursor:'not-allowed'}} >{locale['en']}</div>
                <div className="i18n-item" style={{cursor:'not-allowed'}} >{locale['jp']}</div>
            </div>
        </div>
    );
}

export default I18n;