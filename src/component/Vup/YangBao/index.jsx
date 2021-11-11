import { useSelector } from "react-redux";
import { Fragment, lazy, Suspense } from "react";
// import VoicePanel from '../../Panel/VoicePanel'
import AudioPanel from '../../Panel/AudioPanel'
// import AnnoPanel from '../../Panel/AnnoPanel'
import FriendBtn from "../../utills/FriendBtn";
import Loading from "../../utills/Loading";
import Dynamic from "../../utills/Dynamic";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function YangBao(){
    const voice = useSelector(state => state.getVoiceData.yangbao);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />}>
                    <AnnoPanel up="杨宝"/>
                </Suspense>
                <Dynamic uid="636674318" />
                <Suspense fallback={<Loading />}>
                    <VoicePanel voice={voice} theme="yangbao"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="yangbao"/>
        </Fragment>
    );
}

export default YangBao;