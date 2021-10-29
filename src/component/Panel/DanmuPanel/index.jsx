import { createRef, Fragment, Component } from "react";
import PubSub from 'pubsub-js';
import Danmaku from 'danmaku';


class DanmuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShowHowUseInfo: true
        }
        this.danmaku = null;
        this.danmakuRef = createRef();
        this.timer = setInterval(() => {}, 2000);
    }

    componentDidMount(){
        this.danmaku = new Danmaku({
            container: this.danmakuRef.current
        })
        PubSub.subscribe('emitDanmu', (_, state) => {
            if(this.state.isShowHowUseInfo){
                this.setState(state);
            }
            let hit = Math.floor(Math.random() * (this.props.vupInfo.desc.length - 1));
            this.emitDanmu(this.props.vupInfo.desc[hit]);
        });
        this.showHowUseInfo();
    }

    componentDidUpdate(){
        clearInterval(this.timer);
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
        }
        this.danmaku.destroy();
    }

    // 弹幕新手引导
    showHowUseInfo = () => {
        if(this.timer){
            this.timer = setInterval(() => {this.emitDanmu('点击音声按钮可以发送弹幕哦(¬‿¬)')}, 5000);
        }
    }

    // 发送弹幕
    emitDanmu = (danmuInfo) => {
        this.danmaku.emit({
            text: danmuInfo,
            mode: 'rtl',
            time: 20,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                color: `${this.props.vupInfo.color}`
            }
        })
    }
    
    render() {
        return ( 
            <Fragment>
                <div className="danmaku-container" ref={this.danmakuRef}></div>
            </Fragment>
        );
    }
}
 
export default DanmuPanel;