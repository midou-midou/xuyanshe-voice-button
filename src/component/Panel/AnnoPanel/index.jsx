import { useState } from "react";
import { findVup } from '../../../utils/index';
import { useSelector } from 'react-redux'
import DanmuPanel from "../DanmuPanel";

import 'antd/dist/antd.css'

function AnnoPanel(props) {
    const { up } = props;
    const vups = useSelector(state => state.getVupData);
    console.log(vups);
    const vup = findVup(vups, up);
    let [linkbase] = useState('https://xysbtn.xiaoblogs.cn/profile/');
   
    return (
        <div className="panel-container annoPanel-container drawPanelZoomIn">
            <div className="danmaku-container-panel"><DanmuPanel vupInfo={vup}/></div>
            <div className="profile-container">
                <div className="profile" style={{backgroundImage: `url(${linkbase}${vup.uid}.webp)`}}></div>
            </div>
        </div>
    )
}

export default AnnoPanel;