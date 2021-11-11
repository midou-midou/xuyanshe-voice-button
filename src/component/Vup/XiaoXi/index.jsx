import { useSelector } from "react-redux";
import { Fragment, lazy, Suspense } from "react";
// import VoicePanel from '../../Panel/VoicePanel'
import AudioPanel from '../../Panel/AudioPanel'
// import AnnoPanel from '../../Panel/AnnoPanel'
import FriendBtn from "../../utills/FriendBtn";
import Dynamic from "../../utills/Dynamic";
import Loading from "../../utills/Loading";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoXi(){
    const voice = useSelector(state => state.getVoiceData.xiaoxi);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />}>
                    <AnnoPanel up="小希"/>
                </Suspense>
                <Dynamic uid="5563350" />
                <Suspense fallback={<Loading />}>
                    <VoicePanel voice={voice} theme="xiaoxi"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="xiaoxi"/>
        </Fragment>
    );
}

export default XiaoXi;