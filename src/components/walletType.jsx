import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import EmptyList from './common/EmptyList'
import VipReward from './VipReward'
import walletTypeCss from '../assets/css/component/walletType.module.css'
class WalletType extends Component {
    render() {
        if (this.props.state.walletType === 3) {
            return (
                this.props.state.cardList.length === 0 ?
                    <EmptyList emptyMsg={{ img: 'card_empty', msg: '暂无可用卡' }}></EmptyList> : ''
            );
        }
        if (this.props.state.walletType === 2) {
            return (
                <div className={walletTypeCss.sheetContainer} >
                    <div className={walletTypeCss.sheetCoponTitle}>
                        绑定欢聚橙卡
                        <span onClick={() => this.props.handleType(3)}>
                            <img src={require('../assets/img/loadCancel.png')} />
                        </span>
                    </div>
                    <p className={walletTypeCss.msgInt}>卡号: <input placeholder='请输入卡号' type="text" /> </p>
                    <p className={walletTypeCss.msgInt}>密码: <input placeholder='请输入密码' type="password" /> </p>
                    <button className={walletTypeCss.msgSubmit}>绑定到账户</button>
                </div>
            )
        }
        if (this.props.state.walletType === 1) {
            console.log(this.props);
            return (
                <div className={walletTypeCss.buyCardPage}>
                    <div className={walletTypeCss.walletTop}>
                        <div className={walletTypeCss.vipWalletImg}>
                            <img src={require('../assets/img/vip_wallet.png')} alt="" />
                        </div>
                    </div>
                    <div className={walletTypeCss.walletVipInfo}>
                        <p className={walletTypeCss.walletVipTitle}>VIP+<span>开通VIP+,演出随心看</span><i>></i> </p>
                        <div className={walletTypeCss.vipRewardConts}>
                            <VipReward></VipReward>
                        </div>
                    </div>
                    <div className={walletTypeCss.cardVipInfo}>
                        <p className={walletTypeCss.cardTypeInfo}>储值卡<span>全国通用,购卡充值送200元</span></p>
                        {
                            this.props.state.store_card.map(v => (
                                <div className={walletTypeCss.cardInfoCont} key={v.id}>
                                    <img src={v.card_image} alt="" />
                                    <div className={walletTypeCss.cardInfoContMsg} >
                                        <h3>{v.name}</h3>
                                        <h4>有效期：{v.avail_mouth}个月</h4>
                                        <h5>￥{v.card_price} <span>兑换券{v.use_limit}张</span></h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={walletTypeCss.cardVipInfo}>
                        <p className={walletTypeCss.cardTypeInfo}>品类·次卡</p>
                        {
                            this.props.state.cate_card.map(v => (
                                <div className={walletTypeCss.cardInfoCont} key={v.id}>
                                    <img src={v.card_image} alt="" />
                                    <div className={walletTypeCss.cardInfoContMsg} >
                                        <h3>{v.name}</h3>
                                        <h4>有效期：{v.avail_mouth}个月</h4>
                                        <h5>￥{v.card_price} <span>兑换券{v.use_limit}张</span></h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={walletTypeCss.cardVipInfo}>
                        <p className={walletTypeCss.cardTypeInfo}>城市·次卡</p>
                        {
                            this.props.state.once_card.map(v => (
                                <div className={walletTypeCss.cardInfoCont} key={v.id}>
                                    <img src={v.card_image} alt="" />
                                    <div className={walletTypeCss.cardInfoContMsg} >
                                        <h3>{v.name}</h3>
                                        <h4>有效期：{v.avail_mouth}个月</h4>
                                        <h5>￥{v.card_price} <span>兑换券{v.use_limit}张</span></h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }

    }
}

export default withRouter(WalletType);