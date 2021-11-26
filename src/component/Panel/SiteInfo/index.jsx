function SiteInfo() {
    // TODO: 渲染器
    return ( 
        <div className="panel-container annoPanel-container siteinfoZoomIn">
            <div className="site-info">
                <p className="site-inner site-title">\ 欢迎来到虚研社按钮 /</p>
                <p className="site-inner site-gray heimu">收录一些奇怪的，严🈲外传的，可以在公众场合大声播放的，无限循环的可爱的声音</p>
                <p className="site-inner site-important">本站有大量<span style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bloder'}}>可爱声音哦</span></p>
                <p className="site-inner site-important">特别感谢各位切片man <i className="iconfont icon-heart-fill i-heart"></i> 以及各家录播组的支持</p>
                <p className="site-inner site-important">此项目链接：
                    <i className="iconfont icon-github" style={{color: '#7b379f'}}></i>
                    <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: 'bold'}} href="https://github.com/MIMONATCH/xuyanshe-voice-button">GitHub</a>
                    <i className="iconfont icon-gitee i-gitee"></i>
                    <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline',color: 'var(--link-blue)',fontWeight: '700'}} href="https://gitee.com/mimonarchrd/xuyanshe-voice-button">Gitee</a>
                </p>
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