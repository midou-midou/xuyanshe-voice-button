import { useSelector } from "react-redux";
import { Fragment, Suspense, lazy } from "react";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";
import Loading from "../../utills/Loading";
import Dynamic from "../../utills/Dynamic";

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function Ailurus(){
    const voice = useSelector(state => state.getVoiceData.ailurus);
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />} >
                    <AnnoPanel up="艾露露"/>
                </Suspense>
                <Dynamic uid="1501380958" />
                <Suspense fallback={<Loading />} >
                    <VoicePanel voice={voice} theme="ailurus"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="ailurus"/>
        </Fragment>
    );
}

export default Ailurus;