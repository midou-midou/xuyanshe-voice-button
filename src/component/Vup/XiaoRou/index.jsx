import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import { Skeleton } from "antd";
import AudioPanel from '../../Panel/AudioPanel'
const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoRou(){
    const voice = useSelector(state => state.getVoiceData.xiaorou);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active />} >
                    <AnnoPanel up="小柔"/>
                </Suspense>
                <Suspense fallback={<Skeleton active />} >
                    <VoicePanel voice={voice} theme="xiaorou"/>
                </Suspense>
            </section>
            <AudioPanel voice={voice} up="xiaorou"/>
        </Fragment>
    );
}

export default XiaoRou;