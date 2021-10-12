import { useSelector } from "react-redux";

function Footer() {
    const y = new Date().getFullYear();
    const siteInfo = useSelector(state => state.getSiteInfo);

    return ( 
        <div className="footer-container-panel">
            <div id="footer-copyright">
                <span id="c-flag">Copyright © </span><span id="c-year">{y}</span><span id="footer-au-name"> {siteInfo.author}</span>
            </div>
            <div className="shield-footer-container">
                <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/MIMONATCH/xuyanshe-voice-button" />
                <div className="shield-github-star">
                    <img alt="GitHub forks" src="https://img.shields.io/github/forks/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/MIMONATCH/xuyanshe-voice-button" />
                </div>
            </div>
            <div id="footer-powerby">
                <span id="hexo-info">Power By <a href="https://react.docschina.org/">React</a></span>
            </div>
            <div id="footer-powerby">
                <span id="hexo-info">本网站为粉丝行为，与虚研社官方无任何关系</span>
            </div>
            <div id="footer-beian">
                <span id="icp"><a href="http://beian.miit.gov.cn/"></a></span>
                <span id="gongan"><a href="http://beian.miit.gov.cn/"></a></span>
            </div>
        </div>
     );
}

export default Footer;