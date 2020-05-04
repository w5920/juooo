import React, { Component } from 'react';

import axios from 'axios'
import PageHeaderHref from '../../../components/common/PageHeaderHref'
import EmptyList from '../../../components/common/EmptyList'
import certificationCss from '../../../assets/css/myjuooo/certification.module.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_name: '',
            id_number: '',
            buttonValue: '+添加购票人',
            emptyListShow: false
        }
    }
    //获取购票人
    async getCertification() {
        const data = await axios.post('/userLogin/spectatorMsg', {
            phoneNumber: localStorage.phoneNumber
        });
        if (data.ok === 1) {
            this.setState({
                id_name: data.id_name,
                id_number: data.id_number,
                emptyListShow: false
            })
        } else {
            this.setState({
                emptyListShow: true
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
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'添加购票人'} ></PageHeaderHref>
                {
                    !this.state.emptyListShow ?
                        <EmptyList emptyMsg={{ img: 'real_name_empty', msg: '暂无购票人' }}></EmptyList>
                        : <div className={certificationCss.certificationInfo}>
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
                }
                <button
                    onClick={this.emptyListShow ? () => {
                        this.setState({
                            buttonValue: '保存'
                        })
                    } : this.addCertification.bind(this)}
                    style={{
                        width: '345px',
                        height: '47px',
                        backgroundColor: '#FF6743',
                        position: 'fixed',
                        bottom: '15px',
                        left: '15px',
                        borderRadius: '23px',
                        border: '0',
                        fontSize: '16px',
                        lineHeight: '47px',
                        color: '#fff'
                    }}
                >{this.state.buttonValue}</button>
            </div >
        );
    }
}

export default index;