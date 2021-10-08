import { useSelector } from "react-redux";
import VoicePanel from '../VoicePanel'
import AudioPanel from '../AudioPanel'
import AnnoPanel from '../AnnoPanel'

function XiaoXi(){
    const vup = useSelector(state => state.getVupData);
    const voice = useSelector(state => state.getVoiceData.xiaoxi);
    
    return (
        <section className="panel-root">
            <AnnoPanel />
            <VoicePanel voice={voice}/>
        </section>
    );
}

export default XiaoXi;