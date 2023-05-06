import { useState } from "react"
import { useSelector } from "react-redux"
import { IntlProvider, FormattedMessage} from 'react-intl'
// import { getBiliProfileUrl } from '../../utils/index';

function Footer() {
    const y = new Date().getFullYear()
    const siteInfo = useSelector(state => state.getSiteInfo)
    let [linkbase] = useState(`${window.location.origin}/profile/`)
    const [footInfo] = useState({zh: '本网站为粉丝行为，与虚研社官方无任何关联', en: '', jp: '当サイトはファンの行為で、虚研社の公式とは何の関係もありません'})
    const lang = useSelector((state) => state.getLang)

    return (
        <div className="footer-container-panel">
            <div id="footer-copyright">
                <span id="c-flag">Copyright © </span>
                <span id="c-year">{y}</span>
                <a target="_blank" rel="noopener noreferrer" href={siteInfo.bili}>
                    <div className="footer-profile" style={{backgroundImage: `url(${linkbase}${siteInfo.authoruid}.webp)`}}></div>
                </a>
                <span id="footer-au-name">
                    <a target="_blank" rel="noopener noreferrer" href={siteInfo.bili}> {siteInfo.author}</a>
                </span>
            </div>
            <div id="footer-powerby">
                <span id="footer-info"><IntlProvider locale={lang} messages={footInfo}><FormattedMessage id={lang}></FormattedMessage></IntlProvider></span>
            </div>
            <div id="footer-powerby">
                <span id="footer-info">Power By <i className="iconfont icon-react i-playReact"></i> <a target="_blank" rel="noreferrer" href="https://react.docschina.org/">React</a></span>
            </div>
            <div id="footer-beian">
                <span id="icp"><a target="_blank" rel="noopener noreferrer" href="http://beian.miit.gov.cn/">{siteInfo.beian.icp}</a></span>
                <span id="gongan"><a target="_blank" rel="noopener noreferrer" href="http://beian.miit.gov.cn/">{siteInfo.beian.wangan}</a></span>
            </div>
        </div>
     );
}

export default Footer;