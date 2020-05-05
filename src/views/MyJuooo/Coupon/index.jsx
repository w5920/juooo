import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import myjuoooAction from '../../../store/actionCreator/myJuooo'

import myCouponCss from '../../../assets/css/myjuooo/myCoupon.module.css'
import PageHeaderWhite from '../../../components/common/PageHeaderWhite'
import EmptyList from '../../../components/common/EmptyList'
import ActionSheetText from '../../../components/ActionSheet'
import Loadding from "../../../components/common/Loadding";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sheetShow: true,
            couponType: 1,
        }
    }
    changeSheetShow() {
        this.setState({
            sheetShow: !this.state.sheetShow
        });
    }
    changeCouponType(num) {
        this.setState({
            couponType: num
        });
        this.props.getCouponList(num);
    }
    componentDidMount() {
        this.props.getCouponList();
    }
    render() {
        const couponTypeMsg = ['未使用', '已使用', '已过期'];
        if (!this.props.couponList) {
            return <Loadding></Loadding>
        }
        return (
            < div >
                <PageHeaderWhite
                    pageName={'优惠券'}
                    rightAction={this.changeSheetShow.bind(this)}
                    rightShow={true}>
                </PageHeaderWhite>
                <div className={myCouponCss.couponType} >
                    {
                        couponTypeMsg.map((item, index) => (
                            <div onClick={this.changeCouponType.bind(this, index + 1)} key={'couponType' + index} className={this.state.couponType === index + 1 ? myCouponCss.activeCont : myCouponCss.couponTypeCont}  >
                                <p>{item}
                                    <span></span>
                                </p>
                            </div>
                        ))
                    }
                </div>
                {
                    this.state.couponType === 1 ?
                        <div className={myCouponCss.exChange}>
                            <div className={myCouponCss.exChangeInt}>
                                <input type="text" placeholder={'请输入兑换码'} />
                            </div>
                            <div className={myCouponCss.exChangeBtn}>兑换</div>
                        </div>
                        : ''
                }
                {
                    this.props.couponList.length === 0 ?
                        <EmptyList emptyMsg={{ img: 'coupon_empty', msg: '暂时没有优惠券' }}></EmptyList>
                        : <div></div>
                }
                {
                    this.state.sheetShow ? <p></p > : <ActionSheetText changeSheetShow={this.changeSheetShow.bind(this)}></ActionSheetText>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        couponList: state.myjuooo.couponList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(myjuoooAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(index);