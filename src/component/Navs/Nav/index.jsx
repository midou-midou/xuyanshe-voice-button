import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import I18n from '../../utills/I18n'
import DarkLight from '../../utills/DarkLight'
import { FormattedMessage, IntlProvider } from 'react-intl'

function Nav(){
    const vup = useSelector((state) => state.getVupData)
    const lang = useSelector((state) => state.getLang)

    return (
        <header className="nav-container">
            <div className="navbar">
            {
                vup.map((v,k) => {
                    return (
                        <NavLink activeClassName="top-nav-active" className="nav-item" key={k} to={`/${v.alias}`}>
                            <div className={`nav-small-item ${v.abbr}`}>
                                <IntlProvider locale={lang} messages={v.name}>
                                    <FormattedMessage id={lang}></FormattedMessage>
                                </IntlProvider>
                            </div>
                        </NavLink>
                    )
                })
            }
            </div>
            <I18n />
            <DarkLight />
        </header>
    );
}

export default Nav;