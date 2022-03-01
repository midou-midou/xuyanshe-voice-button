import { useState } from "react";
import { useSelector } from "react-redux";
// import { getBiliProfileUrl } from '../../utils/index';

function Footer() {
    const y = new Date().getFullYear();
    const siteInfo = useSelector(state => state.getSiteInfo);
    let [linkbase] = useState('https://xysbtn.xiaoblogs.cn/profile/');

    return ( 
        <div className="footer-container-panel">
            <div id="footer-copyright">
                <span id="c-flag">Copyright © </span>
                <span id="c-year">{y}</span>
                <a target="_blank" rel="noopener noreferrer" href={siteInfo.bili}>
                    <div className="footer-profile" style={{backgroundImage: `url(${linkbase}${siteInfo.authoruid}.jpg)`}}></div>
                </a>
                <span id="footer-au-name">
                    <a target="_blank" rel="noopener noreferrer" href={siteInfo.bili}> {siteInfo.author}</a>
                </span>
            </div>
            <div className="shield-footer-container">
                <div className="shield-github-star">
                    <img alt="github" src="https://img.shields.io/github/package-json/v/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="fork" src="https://img.shields.io/github/forks/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="star" src="https://img.shields.io/github/stars/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="license" src="https://img.shields.io/github/license/MIMONATCH/xuyanshe-voice-button" />
                </div>
            </div>
            <div id="footer-powerby">
                <span id="footer-info">本网站为粉丝行为，与虚研社官方无任何关联</span>
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