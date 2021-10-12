import { useSelector } from "react-redux";
import { Fragment } from "react";
import VoicePanel from '../VoicePanel'
import AudioPanel from '../AudioPanel'
import AnnoPanel from '../AnnoPanel'

function XiaoXi(){
    const voice = useSelector(state => state.getVoiceData.xiaoxi);
    
    return (
        <Fragment>
            <section className="panel-root">
                <AnnoPanel up="小希"/>
                <VoicePanel voice={voice} theme="xiaoxi"/>
            </section>
            <AudioPanel up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoXi;