import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(){
    const vup = useSelector((state) => state.getVupData);
    return (
        <header>
            <div className="navbar">
            {
                vup.map((v,k) => {
                    return (
                        <NavLink activeClassName="top-nav-active" className="nav-item" key={k} to={"/"+v.abbr}>
                            <div className={`nav-small-item ${v.abbr}`}><div className="nav-icon" style={{backgroundImage: `url(${v.icon})`}}></div> {v.name}</div>
                        </NavLink>
                    )
                })
            }
            </div>
        </header>
    );
}

export default Nav;