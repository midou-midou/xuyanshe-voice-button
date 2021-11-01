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
    
    // 切换语言 - 中文
    const changezhLang = () => {
        dispatch(createChangeLangAction('zh'));
        isShowList();
    }

    // 切换语言 - 英语
    // const changeenLang = () => {
    //     dispatch(createChangeLangAction('en'));
    // }

    // 切换语言 - 日语
    // const changejpLang = () => {
    //     dispatch(createChangeLangAction('jp'));
    // }

    // 语言下拉菜单动画
    const isShowList = () => {
        droplist.current.classList.toggle('active');
    }
    
    // TODO: 翻译完成后需要添加事件
    return ( 
        <div className="i18n-container">
            <div className="i18n-show" onClick={isShowList}>
                <div className="i18n-earth">
                <svg t="1635724525976" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width="20" height="20"><path d="M651.310545 390.050909h325.213091a47.755636 47.755636 0 0 1 46.638546 48.872727v536.203637A47.755636 47.755636 0 0 1 976.523636 1024H419.328a47.755636 47.755636 0 0 1-46.638545-48.872727v-341.178182h-325.818182a47.755636 47.755636 0 0 1-46.545455-48.872727V48.872727a47.755636 47.755636 0 0 1 46.545455-48.872727h557.800727a47.755636 47.755636 0 0 1 46.638545 48.872727v341.178182zM46.917818 585.076364H604.625455V48.872727H46.917818v536.203637z m635.671273-16.523637l-102.4 278.621091h45.521454l25.041455-71.68h113.710545l24.99491 71.68h43.752727l-102.865455-278.621091h-47.755636z m-22.202182 170.589091l44.357818-126.231273 47.197091 126.231273h-91.554909zM306.176 113.710545h35.234909V184.785455h135.354182v188.183272h-35.281455v-22.155636h-100.072727v130.792727h-33.512727v-130.792727h-97.28v22.155636h-35.234909V184.785455h132.514909l-1.722182-71.07491zM210.664727 314.414545h96.628364V221.184H210.664727v93.230545z m130.792728 0h100.072727V221.184h-100.072727v93.230545z" fill="#1296db" p-id="3237"></path></svg>
                </div>
                <div className="i18n-info">{locale[lang]}</div>
                <i className="fas fa-chevron-down"></i>
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