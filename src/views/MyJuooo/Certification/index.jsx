import React, { Component } from 'react';

import axios from 'axios'
import PageHeaderHref from '../../../components/common/PageHeaderHref'
import EmptyList from '../../../components/common/EmptyList'
import certificationCss from '../../../assets/css/myjuooo/certification.module.css'
import ButtonFoot from '../../../components/common/ButtonFoot'

import { filStr } from '../../../filters/index'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_name: null,
            id_number: null,
            buttonValue: '+添加购票人',
            emptyListShow: false,
            buttonShow: true,
        }
    }
    //获取购票人
    async getCertification() {
        const data = await axios.post('/userLogin/spectatorMsg', {
            phoneNumber: localStorage.phoneNumber
        });
        if (data.ok === 1) {
            this.setState({
                id_name: filStr(data.result.id_name, 0, 1),
                id_number: filStr(data.result.id_number, 3, 14),
                emptyListShow: true,
                buttonShow: false
            })
        } else {
            this.setState({
                emptyListShow: false
            })
        }
    }
    //添加购票人
    async addCertification() {
        this.setState({
            emptyListShow: true
        })
        const data = await axios.post('/userLogin/userMsg', {
            id_name: this.state.id_name,
            id_number: this.state.id_number,
            phoneNumber: localStorage.phoneNumber
        });
        if (data.ok === 1) {
            this.getCertification()
        }
    }
    componentDidMount() {
        this.getCertification();
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    changeEmptyShow() {
        this.setState({
            emptyListShow: !this.state.emptyListShow
        })
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'添加购票人'} ></PageHeaderHref>
                {
                    !this.state.emptyListShow ?
                        <>
                            <EmptyList emptyMsg={{ img: 'real_name_empty', msg: '暂无购票人' }}></EmptyList>
                            <ButtonFoot buttonValue={'+添加购票人'} buttonFootFn={this.changeEmptyShow.bind(this)}></ButtonFoot>
                        </>
                        :
                        <>
                            <div className={certificationCss.certificationInfo}>
                                <p className={certificationCss.infoItem}>
                                    <span>姓名:</span>
                                    <input name='id_name'
                                        placeholder='请填写购票人姓名'
                                        value={this.state.id_name}
                                        onChange={this.handleChange.bind(this)}
                                        type="text" />
                                </p>
                                <p className={certificationCss.infoItem}>
                                    <span>身份证号:</span>
                                    <input name='id_number'
                                        placeholder='请填写购票人身份证号'
                                        value={this.state.id_number}
                                        onChange={this.handleChange.bind(this)}
                                        type="text" />
                                </p>
                            </div>
                            {this.state.buttonShow ?
                                <ButtonFoot buttonValue={'保存'} buttonFootFn={this.addCertification.bind(this)}></ButtonFoot> : ''}
                        </>
                }
            </div >
        );
    }
}

export default index;