import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";
import Loading from "../../utills/Loading";
import Dynamic from "../../utills/Dynamic";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoTao(){
    const voice = useSelector(state => state.getVoiceData.xiaotao);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />}>
                    <AnnoPanel up="小桃"/>
                </Suspense>
                <Dynamic uid="5563350"/>
                <Suspense fallback={<Loading />}>
                    <VoicePanel voice={voice} theme="xiaotao"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoTao;