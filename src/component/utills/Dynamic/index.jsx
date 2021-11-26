import { Component, createRef } from "react";
import Loading from "../Loading";
import { message } from "antd";
import dayjs from "dayjs";

import 'antd/dist/antd.css'

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            dynamicName: '',
            dynamicTime: '',
            dynamicTitle: '',
            dynamicInner: '',
            dynamicLink: ''
        }
        this.dref = createRef();
    }

    componentDidMount(){
        this.getBiliDynamic();
    }

    componentDidUpdate(){
        if(!this.state.isLoading){
            this.dref.current.innerHTML = this.state.dynamicInner;
            let waitDel = [];
            for(let i=0;i<this.dref.current.childNodes.length;i++){
                let tName = this.dref.current.childNodes[i].tagName;
                if(tName === 'IFRAME' || tName === 'IMG' || tName === 'BR'){
                    waitDel.push(this.dref.current.childNodes[i]);
                }
            }
            for(let i of waitDel){
                this.dref.current.removeChild(i);
            }
        }
    }

    // (文档宽度-2个margin-2个padding)的2/3px计算出总字数
    caclTitle = (waitStr) => {
        const inner = Math.floor((document.body.clientWidth-4*16)/1.5/16);
        if(waitStr.length > inner){
            return waitStr.slice(0, inner) + '…';
        }else{
            return waitStr;
        }
    }

    getBiliDynamic = async () => {
        try{
            const res = await fetch(`https://xysbtn.xiaoblogs.cn/rss/${this.props.uid}.json`);
            const data = await res.json();
            this.setState({
                isLoading: false,
                dynamicName: data.title,
                dynamicTime: dayjs(data.item[0].pubDate).format('YYYY年MM月DD日 HH:mm:ss'),
                dynamicTitle: this.caclTitle(data.item[0].title),
                dynamicInner: data.item[0].description,
                dynamicLink: data.item[0].link
            })
        }
        catch{
            message.error(`获得uid：${this.props.uid}的动态失败`);
        }
    }
    
    render() { 
        if(this.state.isLoading){
            return (
                <Loading />  
            );
        }else{
            return ( 
                <div className="panel-container dynamic-card drawPanelZoomIn">
                    <div className="dynamic-card-title">{this.state.dynamicName}</div>
                    <div className="dynamic-info">
                        <a target="_blank" rel="noopener noreferrer" className="dynamic-title" href={this.state.dynamicLink}>
                            {this.state.dynamicTitle}
                        </a>
                        <div className="dynamic-time">{this.state.dynamicTime}</div>
                    </div>
                    <div className="dynamic-content" ref={this.dref}></div>
                </div>
            );
        }
    }
}

export default Dynamic;