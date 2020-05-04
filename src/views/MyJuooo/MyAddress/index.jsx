import React, { Component } from 'react';
import { List, Switch } from 'antd-mobile';

import axios from 'axios'
import PageHeaderHref from '../../../components/common/PageHeaderHref'
import EmptyList from '../../../components/common/EmptyList'
import ButtonFoot from '../../../components/common/ButtonFoot'
import myAddressCss from '../../../assets/css/myjuooo/myAddress.module.css'

import CityCheck from '../../../components/common/CityCheck'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogShow: false,
            addFromShow: false,
            consignee_name: '',
            consignee_number: '',
            consignee_number: '',
            consignee_street: ''
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeaddFromShow() {
        this.setState({
            addFromShow: true
        })
    }
    async addAddress() {
        const { consignee_name, consignee_number, consignee_street } = this.state;
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'收货地址'}></PageHeaderHref>
                {
                    !this.state.addFromShow ?
                        <EmptyList emptyMsg={{ img: 'address_empty', msg: '暂无收货地址' }}></EmptyList> :
                        <div className={myAddressCss.myAddressInfo} >
                            <p className={myAddressCss.infoItem}>
                                <span>收货人:</span>
                                <input name='consignee_name'
                                    placeholder='请输入收货人姓名'
                                    value={this.state.consignee_name}
                                    onChange={this.handleChange.bind(this)}
                                    type="text" />
                            </p>
                            <p className={myAddressCss.infoItem}>
                                <span>手机号:</span>
                                <input name='consignee_number'
                                    placeholder='请输入收货人手机号'
                                    value={this.state.consignee_number}
                                    onChange={this.handleChange.bind(this)}
                                    type="text" />
                            </p>
                            <CityCheck></CityCheck>
                            <p className={myAddressCss.infoItem}>
                                <span>详细地址:</span>
                                <input name='consignee_street'
                                    placeholder='请输入详细地址'
                                    value={this.state.consignee_street}
                                    onChange={this.handleChange.bind(this)}
                                    type="text" />
                            </p>

                            <List.Item
                                extra={<Switch
                                    platform="ios"
                                    color="red"
                                />}
                            >设为默认地址</List.Item>
                        </div>
                }
                <ButtonFoot
                    buttonValue={this.state.addFromShow ? '保存' : '+添加收货地址'}
                    buttonFootFn={this.state.addFromShow ? this.addAddress.bind(this) : this.changeaddFromShow.bind(this)}
                ></ButtonFoot>
            </div >
        );
    }
}

export default index;