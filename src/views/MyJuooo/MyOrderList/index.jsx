import React, { Component } from 'react';

import axios from 'axios'

import PageHeaderHref from '../../../components/common/PageHeaderHref'
import EmptyList from '../../../components/common/EmptyList'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }

    async componentDidMount() {
        document.body.style.backgroundColor = '#f5f5f5';
        const data = await axios.get('/user/order/orderList?version=6.1.1&referer=2');
        if (data.list) {
            this.setState({
                orderList: data.list
            })
        }
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'我的订单'} rightShow={true}></PageHeaderHref>
                {
                    this.state.orderList.length === 0 ?
                        <EmptyList emptyMsg={{ img: 'orderList_empty', msg: '暂无订单记录' }}></EmptyList> : ''
                }
            </div>
        );
    }
}

export default index; 