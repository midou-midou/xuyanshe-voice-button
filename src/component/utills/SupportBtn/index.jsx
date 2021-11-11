import { useSelector } from "react-redux";
import { FormattedMessage, IntlProvider } from 'react-intl';
import { findVup } from '../../../utils/index'
import { useState } from "react";

function SupportBtn() {
    const supportInfo = useSelector(state => state.getSiteInfo.supports);
    const tsupportInfo = useSelector(state => state.getSiteInfo.translateSupport);
    const vup = useSelector(state => state.getVupData);
    const lang = useSelector((state) => state.getLang);
    const [linkBase] = useState('//space.bilibili.com/');

    return (  
        <div className="panel-container siteinfoZoomIn">
            <div className="panel-info-container">
                <IntlProvider locale={lang} messages={{zh:'音声支持',en:'Voice Support',jp:'サウンドサポート'}}>
                    <div className="panel-tags"><FormattedMessage id={lang}></FormattedMessage></div>
                </IntlProvider>
            </div>
            <div className="panel-btn-container">
                {
                    supportInfo.map((item, key) => {
                        let color = findVup(vup, item.tag).color;
                        return (
                            <div className="btn-wrapper btn-support" style={{backgroundColor: `${color}`,'--support-color':`${color}`}} key={key}>
                                <a className="btn-name support-name" target="_blank" rel="noopener noreferrer" href={`${linkBase}${item.uid}`}>{item.name}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="panel-info-container">
                <IntlProvider locale={lang} messages={{zh:'翻译支持',en:'translate Support',jp:'翻訳サポート'}}>
                    <div className="panel-tags"><FormattedMessage id={lang}></FormattedMessage></div>
                </IntlProvider>
            </div>
            <div className="panel-btn-container">
                {
                    tsupportInfo.map((item, key) => {
                        return (
                            <div className="btn-wrapper btn-support" style={{backgroundColor: `var(--link-blue)`,'--support-color':`var(--link-blue)`}} key={key}>
                                <a className="btn-name support-name" target="_blank" rel="noopener noreferrer" href={`${linkBase}${item.uid}`}>{item.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SupportBtn;