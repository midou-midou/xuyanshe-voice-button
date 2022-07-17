import { useSelector } from "react-redux";
import { Fragment, Suspense, useEffect } from "react";
import VoicePanel from '../Panel/VoicePanel'
import AudioPanel from '../Panel/AudioPanel'
import AnnoPanel from '../Panel/AnnoPanel'
import FriendBtn from "../utills/FriendBtn";
// import Dynamic from "../../utills/Dynamic";
import Loading from "../utills/Loading";
import { useDispatch } from "react-redux";
import {
    createSetSiteThemeAction
} from '../../store/actions/site'
function Vup(props) {
    const { name } = props.match.params
    const voice = useSelector(state => state.getVoiceData[name]);
    console.log(name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createSetSiteThemeAction(name));
    })
    return ( 
        <Fragment>
            <section className="panel-root">
                <Suspense fallback={<Loading />}>
                    <AnnoPanel up={name}/>
                </Suspense>
                {/* <Dynamic uid="5563350" /> */}
                <Suspense fallback={<Loading />}>
                    <VoicePanel voice={voice} theme={name}/>
                </Suspense>
                <FriendBtn />
            </section>
            <AudioPanel voice={voice} up={name}/>
        </Fragment>
    );
}

export default Vup;