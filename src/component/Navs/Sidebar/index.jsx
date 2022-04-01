import { useEffect, useRef } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'
import DarkLight from '../../utills/DarkLight'
import I18n from '../../utills/I18n'

function Sidebar(props) {
    const sidebarRef = useRef(null)
    const lang = useSelector((state) => state.getLang)

    // 监听sidebar按钮状态
    useEffect(() => {
        if(props.isShowSidebar){
            isShow()
        }else{
            notShow()
        }
    },[props.isShowSidebar])

    // sidebar back动画
    const notShow = () => {
        sidebarRef.current.classList.remove('sidebar-active')
        sidebarRef.current.classList.add('sidebar-back')
    }

    // 显示sidebar 动画
    const isShow = () => {
        sidebarRef.current.classList.remove('sidebar-back')
        sidebarRef.current.classList.remove('sidebar-noshow')
        sidebarRef.current.classList.add('sidebar-active')
    }
    
    return (
        <div className="sidebar-noshow" ref={sidebarRef}>
            <div className="sidebar-mask" onClick={props.setShowState} onAnimationEnd={() => {sidebarRef.current.classList.add('sidebar-noshow')}}></div>
            <div className="sidebar-container" >
                <hr />
                <div className="sidebar-item">
                    <div className="sidebar-info">
                        <IntlProvider locale={lang} messages={{zh: '日间夜间模式切换', en: '', jp: '日夜モード切り替え'}}>
                            <FormattedMessage id={lang}></FormattedMessage>
                        </IntlProvider>
                    </div>
                </div>
                <hr />
                <div className="sidebar-item" style={{width:'70%',height:'3rem'}}>
                    <DarkLight />
                </div>
                <hr />
                <div className="sidebar-item">
                    <div className="sidebar-info">
                        <IntlProvider locale={lang} messages={{zh: '语言切换', en: '', jp: '言語の変更'}}>
                            <FormattedMessage id={lang}></FormattedMessage>
                        </IntlProvider>
                    </div>
                </div>
                <hr />
                <div className="sidebar-item" style={{height:'3rem'}}>
                    <I18n />
                </div>
            </div> 
        </div>
    )
}

export default Sidebar;