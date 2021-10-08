import VoiceBtn from '../VoiceBtn'

function VoicePanel(props){
    const {voice} = props;
    return (
        voice.map((tags, k) => {
            return (
                <div className="panel-container" key={k}>
                    <div className="panel-tags">{tags.clfy}</div>
                    <div className="panel-btn-container">
                        {
                            tags.voice.map((oneSound, k) => {
                                return <VoiceBtn onevoice={oneSound} key={k} />
                            })
                        }
                    </div>
                </div>
            );
        })
    );
}

export default VoicePanel