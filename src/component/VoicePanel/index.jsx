import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import VoiceBtn from '../VoiceBtn'

function VoicePanel(props){
    const {voice, theme} = props;
    const lang = useSelector((state) => state.getLang);

    return (
        <Fragment>
            {
                voice.map((tags, clifkey) => {
                    return (
                        <div className={"panel-container "+ theme} key={clifkey}>
                            <div className="panel-tags">{tags.clfy}</div>
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