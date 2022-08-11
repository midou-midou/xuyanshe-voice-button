import { Fragment, Suspense, Component } from "react";
import store from "../../store/store"
import VoicePanel from '../Panel/VoicePanel'
import AudioPanel from '../Panel/AudioPanel'
import AnnoPanel from '../Panel/AnnoPanel'
import PanelLoading from "../utills/PanelLoading";
import ScreenLoading from "../utills/ScreenLoading";
import { createSetSiteThemeAction } from '../../store/actions/site'
import { createClearPlayerInfo } from '../../store/actions/audio'
import { getVoiceDataASync } from '../../store/actions/voice'

class Vup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            name: props.match.params.name,
            voiceData: {}
        }
    }

    // 初始化加载当前路由的音声
    componentDidMount(){
        this.fetchVoiceData(this.state.name)
        store.dispatch(createSetSiteThemeAction(this.state.name))
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 路由切换
        if(nextProps.match.params.name !== this.props.match.params.name){
            // 音声懒加载
            store.dispatch(createSetSiteThemeAction(nextProps.match.params.name))
            store.dispatch(createClearPlayerInfo())
            if(!this.state.voiceData[nextProps.match.params.name]){
                this.fetchVoiceData(nextProps.match.params.name)
                return false
            }
        }
        return true
    }

    componentDidUpdate(prevProps, prevState){
        // 路由切换
        if(this.props.match.params.name !== prevProps.match.params.name){
            if(this.state.voiceData[this.props.match.params.name]){
                this.setState({name: this.props.match.params.name})
            }
        }
    }

    // 派发的dispatch为异步操作，要等数据返回后才能执行后续的动作
    fetchVoiceData = (vupName) => {
        this.setState({isLoading: true})
        store.dispatch(getVoiceDataASync(vupName)).then(() => {
            // 同步voice音声数据和当前选择的页面name
            let storeState = store.getState().getVoiceData
            if(storeState[this.props.match.params.name]){
                this.setState({
                    isLoading: false,
                    name: this.props.match.params.name,
                    voiceData: storeState
                })
            }})
    }

    render() {
        return this.state.isLoading ? <ScreenLoading /> : <Fragment>
            <section className="panel-root">
                <Suspense fallback={<PanelLoading />}>
                    <AnnoPanel up={this.state.name}/>
                </Suspense>
                <Suspense fallback={<PanelLoading />}>
                    <VoicePanel voice={this.state.voiceData[this.state.name]} theme={this.state.name}/>
                </Suspense>
            </section>
            <AudioPanel voice={this.state.voiceData[this.state.name]} up={this.state.name}/>
        </Fragment>
    }
}

export default Vup;
