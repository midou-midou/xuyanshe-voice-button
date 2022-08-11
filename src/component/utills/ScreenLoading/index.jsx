import { Fragment } from "react";
import loading from "../../../source/svg/loading.svg"
import {FormattedMessage, IntlProvider} from "react-intl/lib";
import {useSelector} from "react-redux";

function ScreenLoading() {
    const lang = useSelector((state) => state.getLang);
    return (
        <Fragment>
            <div className="screenloading-container">
                <img
                    width="50px"
                    height="50px"
                    className="screenloading-logo"
                    src={loading}
                />
                <div className="screenloading-info">
                    <IntlProvider locale={lang} messages={{zh: '音声正在由桃桃装填...', en: '', jp: ''}}>
                        <FormattedMessage id={lang}></FormattedMessage>
                    </IntlProvider>
                </div>
            </div>
        </Fragment>
    );
}

export default ScreenLoading;
