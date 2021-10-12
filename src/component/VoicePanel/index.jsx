import { IntlProvider, FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import VoiceBtn from '../VoiceBtn'

function VoicePanel(props){
    const {voice, theme} = props;
    const lang = useSelector((state) => state.getLang);
    
    return (
        voice.map((tags, k) => {
            return (
                <div className={"panel-container "+ theme} key={k}>
                    <div className="panel-tags">{tags.clfy}</div>
                    <div className="panel-btn-container">
                    {
                        tags.voice.map((oneSound, k) => {
                            return (
                                <IntlProvider locale={lang} messages={oneSound.desc} key={k}>
                                    <VoiceBtn onevoice={oneSound} lang={lang} />
                                </IntlProvider>
                            );
                        })
                    }
                    </div>
                </div>
            );
        })
    );
}

export default VoicePanel