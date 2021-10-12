function SiteInfo() {
    // TODO: 渲染器
    return ( 
        <div className="panel-container annoPanel-container">
            <div className="site-info">
                <p className="site-inner site-title">\ 欢迎来到虚研社按钮 /</p>
                <p className="site-inner site-gray heimu">收录一些怪叫，严🈲外传，可以在公众场合大声播放的，无限循环的可爱的声音</p>
                <p className="site-inner site-important">此项目处于初期，还缺少大量的<span style={{textDecoration: 'underline',color: '#082567',fontWeight: 'bloder'}}>可爱声音、网站功能</span>。希望各位粉丝能多多助力，一同维护这个项目</p>
                <p className="site-inner">\ 欢迎来玩 /</p>
                <div className="shields-container">
                    <img alt="GitHub issues" src="https://img.shields.io/github/issues/MIMONATCH/xuyanshe-voice-button" />
                    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/MIMONATCH/xuyanshe-voice-button" />
                </div>
            </div>
        </div>
    );
}

export default SiteInfo;