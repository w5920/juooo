import React, { Component } from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

import axios from 'axios'
import PageHeaderWhite from '../../components/common/PageHeaderWhite';
import registerCss from '../../assets/css/login/register.module.css'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            code: '',
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async getMsgCode() {
        const phoneNumber = this.state.phoneNumber;
        if (phoneNumber) {
            const data = await axios.post('/userLogin/userGetCaptcha', { phoneNumber });
            if (data.ok === 1) {
                this.setState({
                    code: data.captcha
                })
            } else {
                alert(data.msg)
            }
        }
    }
    async register() {
        const { phoneNumber, code } = this.state;
        const data = await axios.post('/userLogin/userLoginto', { phoneNumber, code });
        if (data.ok === 1) {
            localStorage.is_login = 1;
            localStorage.phoneNumber = phoneNumber;
            this.props.history.go(-1);
        } else {
            alert(data.msg)
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <PageHeaderWhite pageName={'登录/注册'} rightShow={false}></PageHeaderWhite>
                <div className={registerCss.container}>
                    <div className={registerCss.register_logo}>
                        <img src={require('../../assets/img/login_logo.png')} />
                    </div>
                    <p className={registerCss.phoneNumber}>
                        <span>+86</span>
                        <input ref={phoneNumber => this.phoneNumber = phoneNumber}
                            onChange={this.handleChange.bind(this)}
                            placeholder={'请输入手机号'}
                            name='phoneNumber'
                            type="tel" />
                    </p>
                    <p className={registerCss.regCode}>
                        <input ref={regCode => this.regCode = regCode}
                            placeholder={'请输入验证码'}
                            type="text" />
                        <i ref={code => this.code = code}>{this.state.code}</i>
                    </p>
                    <h6>未注册的手机号将自动创建会员账号</h6>
                    <button onClick={this.state.code ? this.register.bind(this) : this.getMsgCode.bind(this)}>{this.state.code ? '立即注册' : '获取验证码'}</button>
                    <h5 className={registerCss.regWay}><span>邮箱注册</span><span>密码登录</span></h5>
                </div>
                <div className={registerCss.register_foot}>
                    <span>其他登录方式</span>
                    <img src={require('../../assets/img/login_qq.png')} />
                    <img src={require('../../assets/img/weibo.png')} />
                </div>
            </div>
        );
    }
}

export default Register;