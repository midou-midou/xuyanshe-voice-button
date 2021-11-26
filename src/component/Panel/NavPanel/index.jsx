import { FormattedMessage, IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import IndexNav from "../../Navs/PanelNavItem";

function NavPanel(props) {
    const lang = useSelector((state) => state.getLang);
    const info = {
        zh: '点击上面的头像即可到达对应up的页面',
        en: '',
        jp: ''
    }
    
    return ( 
        <div className="panel-container indexNavPanel voicePanelZoomIn">
            <div className="indexNav-Container">
                {
                    props.vups.map((v, k) => {
                        return (
                            <IndexNav vup={v} key={k}/>
                        );
                    })
                }
            </div>
            <div className="indexNav-info">
                <IntlProvider locale={lang} messages={info} >
                    <FormattedMessage id={lang}></FormattedMessage>
                </IntlProvider>
            </div>
        </div>
    );
}

export default NavPanel;