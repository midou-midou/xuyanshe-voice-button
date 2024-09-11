import { Fragment } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import VoiceBtn from '../../VoiceBtn'

function VoicePanel(props){
    const {voice, theme} = props;
    const lang = useSelector((state) => state.getLang);

    return (
        <Fragment>
            {
                voice.map((tags, clifkey) => {
                    let isNew = tags.isNew?`panel-new isNew`:`panel-new`;
                    return (
                        <div className={"panel-container voicePanelZoomIn "+ theme} key={clifkey}>
                            <div className={isNew}>
                                <i className="iconfont icon-New-Tga i-new"></i>
                            </div>
                            <div className="panel-info-container">
                                <IntlProvider locale={lang} messages={JSON.parse(tags.clfy.desc)}>
                                    <div className="panel-tags"><FormattedMessage id={lang}></FormattedMessage></div>
                                </IntlProvider>
                            </div>
                            <div className="panel-btn-container">
                            {
                                tags.voice.map((oneSound, voiceKey) => {
                                    return (
                                        <IntlProvider locale={lang} messages={JSON.parse(oneSound.desc)} key={voiceKey}>
                                            <VoiceBtn onevoice={oneSound} currentIndex={clifkey*100+voiceKey} lang={lang} theme={theme}/>
                                        </IntlProvider>
                                    );
                                })
                            }
                            </div>
                        </div>
                    );
                })
            }
        </Fragment>
        
    );
}

export default VoicePanel;