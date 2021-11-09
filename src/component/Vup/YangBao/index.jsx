import { useSelector } from "react-redux";
import { Fragment, lazy, Suspense } from "react";
// import VoicePanel from '../../Panel/VoicePanel'
import AudioPanel from '../../Panel/AudioPanel'
import { Skeleton } from "antd";
// import AnnoPanel from '../../Panel/AnnoPanel'
import FriendBtn from "../../utills/FriendBtn";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function YangBao(){
    const voice = useSelector(state => state.getVoiceData.yangbao);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active/>}>
                    <AnnoPanel up="杨宝"/>
                </Suspense>
                <Suspense fallback={<Skeleton active/>}>
                    <VoicePanel voice={voice} theme="yangbao"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="yangbao"/>
        </Fragment>
    );
}

export default YangBao;