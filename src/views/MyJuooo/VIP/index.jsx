import React, { Component } from 'react';
import axios from 'axios'

import PageHeaderHref from '../../../components/common/PageHeaderHref'
import VipReward from '../../../components/VipReward'


import vipCss from '../../../assets/css/myjuooo/vipPay.module.css'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payList: null,
            payWay: null,
            leCardItem: null
        }
    }
    changePayWay(e) {
        this.setState({
            payWay: e.target.id
        })
    }
    changeLeCardItem(e) {
        this.setState({
            leCardItem: e.target.getAttribute('name')
        })
    }
    //获取支付方式
    async getPayList() {
        const data = await axios.get('/pay/pay/getPayList?version=6.1.1&referer=2');
        const payList = data.reverse();
        payList[2].pay_code = "pay_iconLe";
        this.setState({
            payList,
            payWay: payList[0].pay_id
        })
    }
    //获取乐卡分期方式
    async getLeCardList() {
        let form = new FormData();
        form.append("amount", "99")
        const data = await axios.post('/pay/pay/getLeCardInstallmentInfo?version=6.1.1&referer=2', form);
        this.setState({
            cal_list: data.cal_list,
            leCardItem: data.cal_list[0].fq_num
        })
    }
    async componentDidMount() {
        document.body.style.backgroundColor = '#f5f5f5';
        this.getPayList();
        this.getLeCardList();
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'开通VIP+会员'}></PageHeaderHref>
                <div className={vipCss.container}>
                    <div className={vipCss.vipInfo}>
                        <p>VIP+10大尊享权益</p>
                        <VipReward></VipReward>
                        <div className={vipCss.vipInfoSub}><p>VIP+会员<span>月</span></p> <b>￥99</b></div>
                        <h5>有效期{}月</h5>
                    </div>
                </div>
                <div className={vipCss.cityState}><span>常驻城市</span> <span>请选择城市</span> <b>></b></div>
                {this.state.payList ?
                    <div className={vipCss.payContainer}>
                        {
                            this.state.payList.map(v => (
                                <div key={v.pay_id} className={vipCss.payItem}>
                                    <img src={require(`../../../assets/img/${v.pay_code}.png`)} alt="" />
                                    <span>{v.pay_name}</span>
                                    <input type="radio"
                                        name="payWay"
                                        id={v.pay_id}
                                        onChange={this.changePayWay.bind(this)} />
                                </div>
                            ))
                        }
                        {
                            this.state.payWay === "667" ?
                                <div>
                                    <div className={vipCss.leCardPay}>
                                        {
                                            this.state.cal_list.map((v, index) => (
                                                <div className={vipCss.leCardPayItem}
                                                    key={v.fq_num}
                                                    name={index}
                                                    onClick={this.changeLeCardItem.bind(this)}>
                                                    <h4
                                                        style={this.state.leCardItem == index ? {
                                                            color: "#ff6743"
                                                        } : {}}
                                                        name={index}
                                                    >￥{v.mon_pay}×{v.fq_num}期</h4>
                                                    <h5
                                                        style={this.state.leCardItem == index ? {
                                                            color: "#ff6743"
                                                        } : {}}
                                                        name={index}
                                                    >含服务费￥{v.mon_handle_fee}/期</h5>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={vipCss.totalPay}>应还总额:
                                        {this.state.cal_list[this.state.leCardItem].total_repay_fee}
                                    </div>
                                </div> : ''
                        }
                    </div> : ''
                }
                <div className={vipCss.buyVipTips}>
                    <p>购买即视为同意<span>《聚橙网VIP+会员服务协议》</span> </p>
                    <p >VIP+会员服务一经开通不支持取消/退款，敬请谅解</p>
                </div>
                <div className={vipCss.buyVipFoot}>
                    <div>应付:<span>￥99.00</span> </div>
                    <div>立即支付</div>
                </div>
            </div>
        );
    }
}

export default index;