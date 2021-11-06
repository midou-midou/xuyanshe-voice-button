import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import { Skeleton } from "antd";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function Reine(){
    const voice = useSelector(state => state.getVoiceData.reine);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Skeleton active />} >
                    <AnnoPanel up="兰音"/>
                </Suspense>
                <Suspense fallback={<Skeleton active />} >
                    <VoicePanel voice={voice} theme="reine"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="reine"/>
        </Fragment>
    );
}

export default Reine;