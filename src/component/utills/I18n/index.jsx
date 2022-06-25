import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    createChangeLangAction
} from '../../../store/actions/locale'

function I18n() {
    const lang = useSelector((state) => state.getLang);
    const [locale] = useState({zh: '中文', en: 'English', jp: '日本'});
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
    const changejpLang = () => {
        dispatch(createChangeLangAction('jp'));
    }

    // 语言下拉菜单动画
    const isShowList = () => {
        droplist.current.classList.toggle('active');
    }
    
    // TODO: 翻译完成后需要添加事件
    return ( 
        <div className="i18n-container">
            <div className="i18n-show" onClick={isShowList}>
                <div className="i18n-earth">
                    <i className="iconfont icon-in-en i-i18n"></i>
                </div>
                <div className="i18n-info">{locale[lang]}</div>
                <i className="iconfont icon-xiangxiajiantouxiao i-arrowbtm"></i>
            </div>
            <div className="i18n-droplist" ref={droplist}>
                <div className="i18n-item" onClick={changezhLang} >{locale['zh']}</div>
                <div className="i18n-item" >{locale['en']}</div>
                <div className="i18n-item" onClick={changejpLang} >{locale['jp']}</div>
            </div>
        </div>
    );
}

export default I18n;