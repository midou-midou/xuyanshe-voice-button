import { IntlProvider, FormattedMessage } from "react-intl";
import { useRef } from "react";
import { useState } from "react";
import { message } from "antd";
import Permutation from "../../Permutation";
import { connect } from "react-redux";
import {
    createSetPermutationStateAction
} from '../../../store/actions/audio'

function FeaturePanel(props) {
    const icon = useRef(null);
    const featureRef = useRef(null);
    const [iconstate, setState] = useState(true);

    const changeIcon = () => {
        if(iconstate){
            featureRef.current.className = 'panel-container feature-panel-container panel-not-pinup';
            icon.current.className = 'iconfont icon-quxiaodatouzhen';
        }else{
            featureRef.current.className = 'panel-container feature-panel-container panel-pinup';
            icon.current.className = 'iconfont icon-datouzhen';
        }
        setState(!iconstate);
    }

    const isPermutation = () => {
        if(props.isPlayerPlaying){
            message.warning("请等待当前音声播放完成后重试");
            return;
        }else{
            props.createSetPermutationStateAction();
        }
    }
    
    return (  
        <div ref={featureRef} className="panel-container feature-panel-container panel-pinup">
            <div className="panel-info-container">
                <IntlProvider locale={props.lang} messages={{zh:'功能面板',en:'Feature Panel',jp:'機能パネル'}}>
                    <div className="panel-tags"><FormattedMessage id={props.lang}></FormattedMessage></div>
                </IntlProvider>
                <div className="panel-pin-btn" onClick={changeIcon}><i ref={icon} className="iconfont icon-datouzhen"></i></div>
            </div>
            <div className="panel-btn-container">
                <div className="btn-wrapper btn-permutation" onClick={isPermutation}>
                    <div className="btn-name">
                        <IntlProvider locale={props.lang} messages={{zh:"排列组合功能", en: '', jp: 'カスタムコンビネーション機能'}}>
                            <FormattedMessage id={props.lang}></FormattedMessage>
                        </IntlProvider>
                    </div>
                </div>
            </div>
            <Permutation />
        </div>
    );
}

export default connect(
    state => ({
        lang: state.getLang,
        isPlayerPlaying: state.playingVoice.isPlay
    }),
    {
        createSetPermutationStateAction: createSetPermutationStateAction
    }
)(FeaturePanel);