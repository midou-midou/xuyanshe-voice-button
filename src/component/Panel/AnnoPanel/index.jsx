import { useEffect, useRef, useState } from "react";
import { findVup } from '../../../utils/index';
import { useSelector } from 'react-redux'
import DanmuPanel from "../DanmuPanel";
import Loading from "../../utills/Loading";
import { NO_LIVE, LIVEING } from '../../../config/enmu';
import { getBiliLive, getBiliProfileUrl } from '../../../utils/index';
import { message } from "antd";

import 'antd/dist/antd.css'

function AnnoPanel(props) {
    const { up } = props;
    const vups = useSelector(state => state.getVupData);
    var vup = findVup(vups, up);
    const profileBorderRef = useRef(null);
    const liveInfoRef = useRef(null);
    const [state, setState] = useState({isLive: 0, isLoading: true, headUrl: ''});

    useEffect(() => {
        getUpState();
    },[])
    
    useEffect(() => {
        switch(state.isLive){
            case NO_LIVE:
                break;
            case LIVEING:
                profileBorderRef.current.classList.add('live');
                liveInfoRef.current.classList.add('liveInfo');
                break;
            default:
                break;
        }
    }, [state])

    // 获得直播间状态
    const getUpState = async () => {
        if(!sessionStorage.getItem(up)){
            let liveState = await getBiliLive(vup.liveroom);
            let profile = await getBiliProfileUrl(vup.uid);
            if(!liveState || !profile){
                message.error("获取liveState或profile失败");
                return;
            }
            let upState = {
                lstate: liveState, 
                url: profile
            }
            sessionStorage.setItem(up, JSON.stringify(upState));
            setState({
                isLive: upState.lstate,
                isLoading: false,
                headUrl: upState.url
            })
        }else{
            let upState = sessionStorage.getItem(up);
            setState({
                isLive: upState.lstate,
                headUrl: upState.url
            })
        }
    }
   
    if(state.isLoading){
        return (
            <Loading />
        );
    }else{
        return (
            <div className="panel-container annoPanel-container drawPanelZoomIn">
                <div className="danmaku-container-panel"><DanmuPanel vupInfo={vup}/></div>
                <div className="profile-container">
                    <div className="profile" style={{backgroundImage: `url(${state.headUrl})`}}></div>
                    <div className="profile-border" ref={profileBorderRef}></div>
                    <div className="profile-info" ref={liveInfoRef}><a target="_blank" rel="noopener noreferrer" href={`https://live.bilibili.com/${vup.liveroom}`}>直播中</a></div>
                </div>
            </div>
        );
    }
}

export default AnnoPanel;