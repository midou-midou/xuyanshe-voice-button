import { useSelector } from "react-redux";
import { Fragment } from "react";
import VoicePanel from '../VoicePanel'
import AudioPanel from '../AudioPanel'
import AnnoPanel from '../AnnoPanel'

function Reine(){
    const voice = useSelector(state => state.getVoiceData.xiaorou);
    
    return (
        <Fragment>
            <section className="panel-root">
                <AnnoPanel up="兰音"/>
                <VoicePanel voice={voice} theme="reine"/>
            </section>
            <AudioPanel up="reine"/>
        </Fragment>
    );
}

export default Reine;