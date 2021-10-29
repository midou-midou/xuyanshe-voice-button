import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import { Skeleton } from "antd";
import AudioPanel from '../../Panel/AudioPanel'
const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoTao(){
    const voice = useSelector(state => state.getVoiceData.xiaotao);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active/>}>
                    <AnnoPanel up="小桃"/>
                </Suspense>
                <Suspense fallback={<Skeleton active/>}>
                    <VoicePanel voice={voice} theme="xiaotao"/>
                </Suspense>
            </section>
            <AudioPanel voice={voice} up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoTao;