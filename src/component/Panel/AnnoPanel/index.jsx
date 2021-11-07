import { useEffect, useRef, useState } from "react";
import { findVup } from '../../../utils/index';
import { useSelector } from 'react-redux'
import DanmuPanel from "../DanmuPanel";
import { NO_LIVE, LIVEING } from '../../../config/enmu';
import { getBiliLive } from '../../../utils/index';

function AnnoPanel(props) {
    const { up } = props;
    const vups = useSelector(state => state.getVupData);
    var vup = findVup(vups, up);
    const profileBorderRef = useRef(null);
    const liveInfoRef = useRef(null);
    const [liveState, setState] = useState(0);

    useEffect(() => {
        getLiveState();
    },[])
    
    useEffect(() => {
        switch(liveState){
            case NO_LIVE:
                break;
            case LIVEING:
                profileBorderRef.current.classList.add('live');
                liveInfoRef.current.classList.add('liveInfo');
                break;
            default:
                break;
        }
    }, [liveState])

    // 获得直播间状态
    const getLiveState = async () => {
       const state = await getBiliLive(vup.liveroom);
       setState(state);
    }
   
    return (
        <div className="panel-container annoPanel-container drawPanelZoomIn">
            <div className="danmaku-container-panel"><DanmuPanel vupInfo={vup}/></div>
            <div className="profile-container">
                <div className="profile" style={{backgroundImage: `url(${vup.profile})`}}></div>
                <div className="profile-border" ref={profileBorderRef}></div>
                <div className="profile-info" ref={liveInfoRef}><a target="_blank" href={`https://live.bilibili.com/${vup.liveroom}`}>直播中</a></div>
            </div>
        </div>
    );
}

export default AnnoPanel;