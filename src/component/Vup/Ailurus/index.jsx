import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import { Skeleton } from "antd";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function Ailurus(){
    const voice = useSelector(state => state.getVoiceData.ailurus);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active />} >
                    <AnnoPanel up="艾露露"/>
                </Suspense>
                <Suspense fallback={<Skeleton active />} >
                    <VoicePanel voice={voice} theme="ailurus"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="ailurus"/>
        </Fragment>
    );
}

export default Ailurus;