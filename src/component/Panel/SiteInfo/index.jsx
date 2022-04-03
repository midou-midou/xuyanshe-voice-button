import { useState } from "react"
import {IntlProvider, FormattedMessage} from 'react-intl'
import { useSelector } from "react-redux";

function SiteInfo() {
    const lang = useSelector((state) => state.getLang)
    const [siteinfo, _] = useState(
        [
            {zh: '欢迎来到虚研社按钮', en: '', jp: '虚研社ボタンへようこそ'},
            {zh: '收录一些奇怪的，严🈲外传的，可以在公众场合大声播放的，无限循环的可爱的声音', en: '', jp: '変な音、外伝厳禁、公共の場で大声で再生できる、無限ループの可愛い音が収録されています'},
            {zh: '本站有大量', en: '', jp: 'ここには大量の'},
            {zh: '可爱声音哦', en: '', jp: 'かわいい声'},
            {zh: '特别感谢各位切片man', en: '', jp: 'みんなの資源に感謝します'},
            {zh: '以及各家录播组的支持', en: '', jp: '録画チームのサポートに感謝します'},
            {zh: '此项目链接', en: '', jp: 'このアイテムのリンク'},
            {zh: '欢迎来玩', en: '', jp: 'いらっしゃいませ'},
            {zh: '作者', en: '', jp: '作成者'},
        ]
    )
    return ( 
        <div className="panel-container annoPanel-container siteinfoZoomIn">
            <div className="site-info">
                <p className="site-inner site-title">\ <IntlProvider locale={lang} messages={siteinfo[0]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider> /</p>
                <p className="site-inner site-gray heimu"><IntlProvider locale={lang} messages={siteinfo[1]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider></p>
                <p className="site-inner site-important"><IntlProvider locale={lang} messages={siteinfo[2]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider><span style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bloder'}}>
                        <IntlProvider locale={lang} messages={siteinfo[3]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider>
                    </span></p>
                <p className="site-inner site-important">
                    <IntlProvider locale={lang} messages={siteinfo[4]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider>
                     <i className="iconfont icon-heart-fill i-heart"></i> 
                    <IntlProvider locale={lang} messages={siteinfo[5]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider>
                    </p>
                <p className="site-inner site-important"><IntlProvider locale={lang} messages={siteinfo[6]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider>：
                    <i className="iconfont icon-github" style={{color: '#7b379f'}}></i>
                    <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bold'}} href="https://github.com/MIMONATCH/xuyanshe-voice-button">GitHub</a>
                    <i className="iconfont icon-gitee i-gitee"></i>
                    <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: '700'}} href="https://gitee.com/mimonarchrd/xuyanshe-voice-button">Gitee</a>
                </p>
                <p className="site-inner">\ <IntlProvider locale={lang} messages={siteinfo[7]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider> /</p>
                <p className="site-inner site-important">
                    <IntlProvider locale={lang} messages={siteinfo[8]}><FormattedMessage id={lang}></FormattedMessage></IntlProvider>
                ：<a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/9964933">_米豆</a></p>
                <div className="shields-container">
                    <img alt="GitHub issues" src="https://img.shields.io/github/issues/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/MIMONATCH/xuyanshe-voice-button" />
                </div>
            </div>
        </div>
    );
}

export default SiteInfo;