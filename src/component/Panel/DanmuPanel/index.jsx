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
    }

    componentDidMount(){
        this.danmaku = new Danmaku({
            container: this.danmakuRef.current
        })
        // this.showHowUseInfo();
        PubSub.subscribe('emitDanmu', (_, state) => {
            if(this.state.isShowHowUseInfo){
                this.setState(state);
            }
            let hit = Math.floor(Math.random() * (this.props.vupInfo.desc.length - 1));
            this.emitDanmu(this.props.vupInfo.desc[hit]);
        });
        this.timer = setInterval(() => this.showHowUseInfo(), 5000);
    }

    componentDidUpdate(){
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
        }
        this.danmaku.destroy();
    }

    // 弹幕新手引导
    showHowUseInfo = () => {
        this.emitDanmu('点击音声按钮可以发送弹幕哦(¬‿¬)');
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