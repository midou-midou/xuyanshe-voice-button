function SiteInfo() {
    // TODO: 渲染器
    return ( 
        <div className="panel-container annoPanel-container siteinfoZoomIn">
            <div className="site-info">
                <p className="site-inner site-title">\ 欢迎来到虚研社按钮 /</p>
                <p className="site-inner site-gray heimu">收录一些奇怪的，严🈲外传的，可以在公众场合大声播放的，无限循环的可爱的声音</p>
                <p className="site-inner site-important">此项目处于初期，还缺少大量的<span style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bloder'}}>可爱声音、网站功能</span>。期望各位粉丝能多多助力，一同维护这个项目</p>
                <p className="site-inner site-important"><span style={{color: 'red',fontWeight: 'bloder'}}>黑色区域下有好康的！！！</span></p>
                <p className="site-inner site-important"><span style={{color: 'red',fontWeight: 'bloder'}}>右下角的按钮可以切换页面哦</span></p>
                <p className="site-inner site-important">此项目链接：
                    <i className="fab fa-github"></i><a style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bold'}} href="https://github.com/MIMONATCH/xuyanshe-voice-button">GitHub</a>
                    <svg t="1634115134627" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="16" height="16"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="2435"></path></svg>
                    <a style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: '700'}} href="https://gitee.com/mimonarchrd/xuyanshe-voice-button">Gitee</a>
                </p>
                <p className="site-inner">\ 欢迎来玩 /</p>
                <div className="shields-container">
                    <img alt="GitHub issues" src="https://img.shields.io/github/issues/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/MIMONATCH/xuyanshe-voice-button" />
                </div>
            </div>
            <div className="site-inner-leftimg"></div>
            <div className="site-inner-rightimg"></div>
        </div>
    );
}

export default SiteInfo;