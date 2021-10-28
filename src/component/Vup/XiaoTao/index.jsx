import { useSelector } from "react-redux";
import { Fragment } from "react";
import VoicePanel from '../../VoicePanel'
import AudioPanel from '../../AudioPanel'
import AnnoPanel from '../../AnnoPanel'

function XiaoTao(){
    const voice = useSelector(state => state.getVoiceData.xiaotao);
    
    return (
        <Fragment>
            <section className="panel-root">
                <AnnoPanel up="小桃"/>
                <VoicePanel voice={voice} theme="xiaotao"/>
            </section>
            <AudioPanel up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoTao;