import { useSelector } from "react-redux";
import { Fragment } from "react";
import VoicePanel from '../VoicePanel'
import AudioPanel from '../AudioPanel'
import AnnoPanel from '../AnnoPanel'

function Ailurus(){
    const voice = useSelector(state => state.getVoiceData.xiaorou);
    
    return (
        <Fragment>
            <section className="panel-root">
                <AnnoPanel up="艾露露"/>
                <VoicePanel voice={voice} theme="ailurus"/>
            </section>
            <AudioPanel up="ailurus"/>
        </Fragment>
    );
}

export default Ailurus;