import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import myjuooAction from '../../../store/actionCreator/myJuooo'
import Loadding from "../../../components/common/Loadding";
import PageHeaderWhite from '../../../components/common/PageHeaderWhite'
import myPlusCss from '../../../assets/css/myjuooo/myPlus.module.css'

class index extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getPlusInfo();
        this.props.getEquieyList();
        console.log(this.props);
    }
    render() {
        if (!this.props.equityList || !this.props.plusInfo) {
            return <Loadding></Loadding>
        }
        return (
            <div>
                <PageHeaderWhite pageName={'橙PLUS卡'} rightShow={true}></PageHeaderWhite>

                <div className={myPlusCss.plusInfo}>
                    <div className={myPlusCss.plusType}>
                        <p className={myPlusCss.plusTypeName}>橙PLUS卡</p>
                        <div className={myPlusCss.plusMoney}>
                            <span>开卡{this.props.plusInfo.card_price}</span>
                            <span>送</span>
                            <span>{this.props.plusInfo.return_money}</span>
                            <span>储值卡</span>
                        </div>
                        <div className={myPlusCss.plusRights}>
                            <span >赠送VIP+会员</span>
                            <span >年</span>
                            <span >尊享10大权益</span>
                        </div>
                        <span className={myPlusCss.plusRule} >使用规则</span>
                    </div>
                </div>
                <div className={myPlusCss.openPlus}>
                    <p>立即开卡</p>
                </div>
                <div className={myPlusCss.plusRewardContainer}>
                    <div className={myPlusCss.rewardMsg}>
                        <p>VIP+尊享10大权益</p>
                        <ul className={myPlusCss.rewardContainer}>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>优先购票</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>专属票价</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>专享折扣</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>专享券</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>全场包邮</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>双倍积分</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>赠观影券</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>明星活动</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>免费期刊</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>生日专享</span>
                            </li>
                            <li>
                                <div className={myPlusCss.rewardBgimg}></div>
                                <span className={myPlusCss.rewardName}>敬请期待</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={myPlusCss.plusSave}>
                    <img src={require('../../../assets/img/save.bg.png')} />
                </div>
                <div className={myPlusCss.plusFoot}>
                    <p>开卡限时送<span>￥200</span></p>
                    <button>立即开卡</button>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        plusInfo: state.myjuooo.plusInfo,
        equityList: state.myjuooo.equityList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(myjuooAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(index);