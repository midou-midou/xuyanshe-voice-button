import { NavLink, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(){
    const props = useSelector((state) => state.getVupData);
    return (
        <header>
            <div className="navbar">
            {
                props.map((v,k) => {
                    return <NavLink className="nav-item" key={k} to={"/"+v.abbr}>{v.name}</NavLink>  
                })
            }
            </div>
        </header>
    );
}

export default Nav;