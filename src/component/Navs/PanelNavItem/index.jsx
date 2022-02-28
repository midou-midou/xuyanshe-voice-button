import { useState } from "react";
import { NavLink } from "react-router-dom";

function PanelNavItem(props) {
    return ( 
        <div className="">
            <NavLink activeClassName="sidebar-item-active" className="sidebar-vup-icon" style={{backgroundImage: `url(${props.vup.profile})`}} to={"/"+props.vup.abbr}></NavLink>
        </div>
    );
}

export default PanelNavItem;