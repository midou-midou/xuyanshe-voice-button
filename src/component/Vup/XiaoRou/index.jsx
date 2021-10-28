import { useSelector } from "react-redux";
import { Fragment } from "react";
import VoicePanel from '../../VoicePanel'
import AudioPanel from '../../AudioPanel'
import AnnoPanel from '../../AnnoPanel'

function XiaoRou(){
    const voice = useSelector(state => state.getVoiceData.xiaorou);
    
    return (
        <Fragment>
            <section className="panel-root">
                <AnnoPanel up="小柔"/>
                <VoicePanel voice={voice} theme="xiaorou"/>
            </section>
            <AudioPanel up="xiaorou"/>
        </Fragment>
    );
}

export default XiaoRou;