import { useSelector } from "react-redux";
import { FormattedMessage, IntlProvider } from 'react-intl';
import { findVup } from '../../../utils/index'
import { useState } from "react";
import CoolGirl from "../CoolGirl";

function SupportBtn() {
    const supportInfo = useSelector(state => state.getSiteInfo.supports);
    const vup = useSelector(state => state.getVupData);
    const lang = useSelector((state) => state.getLang);
    const [linkBase] = useState('//space.bilibili.com/');
    const [ProfileLink] = useState(`${window.location.origin}/profile/`);

    return (  
        <div className="panel-container siteinfoZoomIn">
            <div className="panel-info-container">
                <IntlProvider locale={lang} messages={{zh:'音声&翻译支持',en:'Voice Support',jp:'リソースと翻訳のサポート'}}>
                    <div className="panel-tags"><FormattedMessage id={lang}></FormattedMessage></div>
                </IntlProvider>
            </div>
            <div className="panel-btn-container">
                {
                    supportInfo.map((item, key) => {
                        let color = findVup(vup, item.tag).color;
                        let profile = ProfileLink + item.uid + '.webp'; 
                        return (
                            <div className="btn-wrapper btn-support" style={{backgroundColor: `${color}`,'--support-color':`${color}`}} key={key}>
                                <div className="support-profile" style={{
                                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), var(--support-color)),'+
                                                    `url(${profile})`
                                }}></div>
                                <a className="btn-name support-name" target="_blank" rel="noopener noreferrer" href={`${linkBase}${item.uid}`}>{item.name}</a>
                            </div>
                        )
                    })
                }
                <CoolGirl />
            </div>
        </div>
    );
}

export default SupportBtn;