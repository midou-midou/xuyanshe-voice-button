import { useSelector, useDispatch } from "react-redux";
import { Fragment, Suspense, lazy, useEffect } from "react";
import AudioPanel from '../../Panel/AudioPanel'
import FriendBtn from "../../utills/FriendBtn";
import Loading from "../../utills/Loading";
// import Dynamic from "../../utills/Dynamic";
import {
    createSetSiteThemeAction
} from '../../../store/actions/site'

const AnnoPanel = lazy(() => import('../../Panel/AnnoPanel'));
const VoicePanel = lazy(() => import('../../Panel/VoicePanel'));

function XiaoRou(){
    const voice = useSelector(state => state.getVoiceData.xiaorou);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createSetSiteThemeAction("xiaorou"));
    })
    
    return (
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />} >
                    <AnnoPanel up="小柔"/>
                </Suspense>
                {/* <Dynamic uid="1734978373" /> */}
                <Suspense fallback={<Loading />} >
                    <VoicePanel voice={voice} theme="xiaorou"/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up="xiaorou"/>
        </Fragment>
    );
}

export default XiaoRou;