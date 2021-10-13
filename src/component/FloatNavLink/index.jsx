import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRef } from 'react';


function FloatNavLink() {
    const vup = useSelector((state) => state.getVupData);
    const navbar = useRef(null);

    const playAnim = () => {
        navbar.current.classList.toggle('not-active-e');
        navbar.current.classList.toggle('active-e');
    }
    
    return (
        <div className="float-navbar not-active-e" onClick={playAnim} ref={navbar}>
            <i className="fas fa-ellipsis-h"></i>
            <div className="float-nav-container">
                {
                    vup.map((v, k) => {
                        return (
                            <NavLink activeClassName="float-nav-item-active" className={`float-nav-item ${v.abbr}`} style={{backgroundImage: `url(${v.profile})`}} key={k} to={"/"+v.abbr}></NavLink>
                        )
                    })  
                }
            </div>
        </div>      
    )
}

export default FloatNavLink;