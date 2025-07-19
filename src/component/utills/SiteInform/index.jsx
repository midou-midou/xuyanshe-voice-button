import { Fragment } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

function SiteInform() {
    const lang = useSelector((state) => state.getLang)
    const siteInfo = useSelector((state) => state.getSiteInfo.inform)

    if(siteInfo.zh === "" && siteInfo.en === "" && siteInfo.jp === ""){
        return (
            <Fragment></Fragment>
        )
    }else{
        return (
            <div className="siteInform-container">
                <div className="siteInform-inner">
                    <IntlProvider locale={lang} messages={siteInfo}>
                        <FormattedMessage id={lang}></FormattedMessage>
                    </IntlProvider>
                    <a href="https://upload.xuyanshe.club" target="_blank" style={{
                        textDecoration: 'none'
                    }} rel="noreferrer">点我跳转上传站</a>
                </div>
            </div>
        );
    }
   
}

export default SiteInform;