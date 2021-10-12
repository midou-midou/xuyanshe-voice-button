import { useEffect, useRef } from "react";
import { drawDanmu, findVup } from '../../utils/index';
import { useSelector } from 'react-redux'


function AnnoPanel(props) {
    const { up } = props;
    const vup = useSelector(state => state.getVupData);
    var number = findVup(vup, up);
    const danmuCanvas = useRef(null);
    const danmuCanvas1 = useRef(null);

    useEffect(() => {
        drawDanmu(danmuCanvas.current, number.desc, number.color);
        drawDanmu(danmuCanvas1.current, number.desc, number.color);
        return () => {}
    })
   
    return (
        <div className="panel-container annoPanel-container">
            <canvas id="danmu-collect" ref={danmuCanvas}></canvas>
            <div className="profile" style={{backgroundImage: `url(${number.profile})`}}></div>
            <canvas id="danmu-collect" ref={danmuCanvas1}></canvas>
        </div>
    );
}

export default AnnoPanel;