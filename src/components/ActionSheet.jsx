
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import actionSheetCss from '../assets/css/component/actionSheet.module.css'

class ActionSheetText extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const pList = [
            '1、单笔订单只能使用1张优惠券，不能同时使用多张优惠券；',
            '2、请在有效期内使用优惠券，未使用的优惠券过期后，将自动作废；',
            '3、每张优惠券的使用条件请查看对应优惠券的使用说明；',
            '4、部分特殊演出不适用平台发放的所有优惠券，具体以付款结算为准；',
            '5、用户使用优惠券下订单，无论是否支付优惠券将不予退回；',
            '6、优惠券仅能在聚橙网提交订单时抵减应支付商品金额，不能进行兑现或其他用；',
            '7、使用优惠券时，优惠券与平台其他优惠不能同时享有，优惠券支付部分不开具发票',
            '8、优惠券严禁出售或转让，如经发现并证实的，该券将予以作废处理；',
            '9、如果在聚橙网使用通过不正当手段获得的优惠劵，聚橙网有权将该券予以作废处理，并要求此客户通过其它方式补足余款。',
            '10、聚橙网对优惠券使用条件享有最终解释权',
            '11、如需了解更多，请联系在线客服或拨打客服电话400-185-8666。'
        ];
        return (
            <div className={actionSheetCss.sheetCoponText}>
                <div className={actionSheetCss.sheetCoponTitle}>
                    规则
                    <span onClick={() => this.props.changeSheetShow()}>
                        <img src={require('../assets/img/loadCancel.png')} />
                    </span>
                </div>
                {
                    pList.map((v, i) => (
                        <p key={'sheet' + i} className={actionSheetCss.sheetCoponItem}>{v}</p>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(ActionSheetText);
