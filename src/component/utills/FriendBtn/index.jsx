import { useSelector } from "react-redux";
import { FormattedMessage, IntlProvider } from 'react-intl';


function FriendBtn() {
    const friendsInfo = useSelector(state => state.getSiteInfo.friends);
    const lang = useSelector((state) => state.getLang);
    
    return ( 
        <div className="panel-container">
            <div className="panel-info-container">
                <IntlProvider locale={lang} messages={{zh:'友链',en:'Friends link',jp:'友情リンク'}}>
                    <div className="panel-tags"><FormattedMessage id={lang}></FormattedMessage></div>
                </IntlProvider>
            </div>
            <div className="panel-btn-container">
                {
                    friendsInfo.map((item, key) => 
                        <div className="btn-wrapper btn-friend" style={{backgroundColor: `${item.color}`,'--friend-color':`${item.color}`}} key={key}>
                            <a className="btn-name friend-name" target="_blank" href={item.link}>{item.name}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default FriendBtn;