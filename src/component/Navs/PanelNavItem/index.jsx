import { NavLink } from "react-router-dom";

function PanelNavItem(props) {
    return ( 
        <div className="">
            <NavLink 
                activeClassName="sidebar-item-active" 
                className="sidebar-vup-icon" 
                style={{backgroundImage: `url(https://voice.xuyanshe.club/profile/${props.vup.uid}.webp)`}} 
                to={`/${props.vup.alias}`}
            ></NavLink>
        </div>
    );
}

export default PanelNavItem;