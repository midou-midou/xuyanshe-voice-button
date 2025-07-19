import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';

function DarkLight(props) {
    const [isSwitch, setSwitch] = useState(window.matchMedia('(prefers-color-scheme: light)').matches);
    const maskRef = useRef(null);
    
    useEffect(() => {
        let mount = document.getElementsByTagName('body')[0];
        if(isSwitch){
            maskRef.current.classList.remove('right');
            maskRef.current.classList.add('left');
            mount.className = `light panel-root ${props.sitetheme}`;
        }else{
            maskRef.current.classList.remove('left');
            maskRef.current.classList.add('right');
            mount.className = `dark panel-root ${props.sitetheme}`;
        }
    },[isSwitch, props.sitetheme])
    
    const switchMode = () => {
        setSwitch(isSwitch ? false : true);
    }
    
    return ( 
        <div className="darkmode-btn" onClick={switchMode}>
            <div className="darkmode-container">
                <div className="darkmode-sun">
                    <i className="iconfont icon-sun"></i>
                </div>
                <div className="darkmode-moon">
                    <i className="iconfont icon-moon"></i>
                </div>
                <div className="darkmode-mask" ref={maskRef}></div>
            </div>
        </div>
    );
}

export default connect(
    state => ({
        sitetheme: state.getSiteInfo.sitetheme
    }),{}
)(DarkLight);