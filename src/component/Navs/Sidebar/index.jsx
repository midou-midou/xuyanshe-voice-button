import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DarkLight from '../../utills/DarkLight';
import I18n from '../../utills/I18n';

function Sidebar(props) {
    const sidebarRef = useRef(null);

    // 监听sidebar按钮状态
    useEffect(() => {
        if(props.isShowSidebar){
            isShow();
        }else{
            notShow();
        }
    },[props.isShowSidebar])

    // sidebar back动画
    const notShow = () => {
        sidebarRef.current.classList.remove('sidebar-active');
        sidebarRef.current.classList.add('sidebar-back');
    }

    // 显示sidebar 动画
    const isShow = () => {
        sidebarRef.current.classList.remove('sidebar-back');
        sidebarRef.current.classList.remove('sidebar-noshow');
        sidebarRef.current.classList.add('sidebar-active');
    }
    
    return (
        <div className="sidebar-noshow" ref={sidebarRef}>
            <div className="sidebar-mask" onClick={props.setShowState} onAnimationEnd={() => {sidebarRef.current.classList.add('sidebar-noshow');}}></div>
            <div className="sidebar-container" >
                <div className="sidebar-item">
                    <div className="sidebar-info">点击头像即可传送</div>
                </div>
                <hr />
                {props.vup.map((v, k) => {
                    return (
                        <div className="sidebar-item" key={k}>
                            <NavLink activeClassName="sidebar-item-active" className="sidebar-vup-icon" style={{backgroundImage: `url(${v.profile})`}} to={"/"+v.abbr}></NavLink>
                        </div>
                    )
                })}
                <hr />
                <div className="sidebar-item">
                    <div className="sidebar-info">夜间模式切换</div>
                </div>
                <hr />
                <div className="sidebar-item" style={{width:'70%',height:'3rem'}}>
                    <DarkLight />
                </div>
                <hr />
                <div className="sidebar-item">
                    <div className="sidebar-info">语言切换</div>
                </div>
                <hr />
                <div className="sidebar-item" style={{height:'3rem'}}>
                    <I18n />
                </div>
            </div> 
        </div>
    );
}

export default Sidebar;