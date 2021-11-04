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
                    return (
                        <div className={"panel-container voicePanelZoomIn "+ theme} key={clifkey}>
                            <div className="panel-info-container">
                                <IntlProvider locale={lang} messages={tags.clfy}>
                                    <div className="panel-tags voice"><FormattedMessage id={lang}></FormattedMessage></div>
                                </IntlProvider>
                                <IntlProvider locale={lang} messages={tags.alias}>
                                    <div className="panel-alias heimu"><FormattedMessage id={lang}></FormattedMessage></div>
                                </IntlProvider>
                            </div>
                            <div className="panel-btn-container">
                            {
                                tags.voice.map((oneSound, voiceKey) => {
                                    return (
                                        <IntlProvider locale={lang} messages={oneSound.desc} key={voiceKey}>
                                            <VoiceBtn onevoice={oneSound} currentIndex={clifkey*100+voiceKey} lang={lang} />
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