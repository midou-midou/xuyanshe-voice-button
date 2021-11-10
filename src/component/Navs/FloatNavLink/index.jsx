import { useSelector } from 'react-redux'
import { useRef, Fragment, useState } from 'react';
import Sidebar from '../Sidebar';

function FloatNavLink() {
    const vup = useSelector((state) => state.getVupData);
    const navbar = useRef(null);
    const [isShow, setShow] = useState(false);

    // 右下角按钮动画
    const playAnim = () => {
        navbar.current.classList.toggle('not-active-e');
        navbar.current.classList.toggle('active-e');
    }

    // toTop
    const toTop = () => {
        window.scrollTo(0,0);
    }

    // 设置sidebar是否显示状态
    const setShowState = () => {
        setShow(isShow? false: true);
    }
    
    return (
        <Fragment>
            <Sidebar setShowState={setShowState} isShowSidebar={isShow} vup={vup}/>
            <div className="float-navbar not-active-e" onClick={playAnim} ref={navbar}>
                <i className="iconfont icon-yemiandingbulangongnenganniu-gengduo-hei i-sandian"></i>
                <div className="float-nav-container">
                    <div className="float-nav-item toTop" onClick={toTop}><i className="iconfont icon-ictotop"></i></div>
                    <div className="float-nav-item showSidebar" onClick={setShowState}><i className="iconfont icon-sidebar"></i></div>
                </div>
            </div> 
        </Fragment>
    )
}

export default FloatNavLink;