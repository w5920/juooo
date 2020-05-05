import React, { Component } from 'react';

import axios from 'axios'

import PageHeaderHref from '../../../components/common/PageHeaderHref'
import myWalletCss from '../../../assets/css/myjuooo/myWallet.module.css'
import WalletType from '../../../components/walletType'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            walletType: 1,
            store_card: [],
            cate_card: [],
            once_card: []
        }
    }

    async getCardList() {
        const data = await axios.get('/User/Card/myYearCard?version=6.1.1&referer=2');
        if (data.list) {
            this.setState({
                cardList: data.list,
            })
        }
    }
    async getCardGroupList() {
        const data = await axios.get('/Card/index/getCardGroupList?version=6.1.1&referer=2');
        if (data.store_card) {
            this.setState({
                store_card: data.store_card,
                cate_card: data.cate_card,
                once_card: data.once_card,
            })
        }
    }

    async componentDidMount() {
        if (this.props.location.search) {
            this.setState({
                walletType: this.props.location.search.slice(4, 5) / 1
            })
        }
        document.body.style.backgroundColor = '#f5f5f5';
        this.getCardList();
        this.getCardGroupList();
    }
    handleType(type) {
        this.setState({
            walletType: type
        })
    }

    render() {
        return (
            <div className={myWalletCss.myWallet}>
                <PageHeaderHref pageName={'我的卡包'} rightShow={true}></PageHeaderHref>
                <WalletType state={this.state} handleType={this.handleType.bind(this)}></WalletType>
                <ul className={myWalletCss.walletNav}>
                    <li className={this.state.walletType === 1 ? myWalletCss.activeNav : ''} onClick={this.handleType.bind(this, 1)}><p>购买新卡</p></li>
                    <li className={this.state.walletType === 2 ? myWalletCss.activeNav : ''} onClick={this.handleType.bind(this, 2)}><p>绑定新卡</p></li>
                    <li className={this.state.walletType === 3 ? myWalletCss.activeNav : ''} onClick={this.handleType.bind(this, 3)}><p>我的卡包</p></li>
                </ul>
            </div>
        );
    }
}

export default index; 