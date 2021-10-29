import { useSelector } from "react-redux";
import { Fragment, lazy, Suspense } from "react";
// import VoicePanel from '../../Panel/VoicePanel'
import AudioPanel from '../../Panel/AudioPanel'
import { Skeleton } from "antd";
// import AnnoPanel from '../../Panel/AnnoPanel'
const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoXi(){
    const voice = useSelector(state => state.getVoiceData.xiaoxi);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active/>}>
                    <AnnoPanel up="小希"/>
                </Suspense>
                <Suspense fallback={<Skeleton active/>}>
                    <VoicePanel voice={voice} theme="xiaoxi"/>
                </Suspense>
            </section>
            <AudioPanel voice={voice} up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoXi;