import React, { Component } from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import axios from 'axios'

import PageHeaderWhite from '../../../components/common/PageHeaderWhite'
import myAccountSafeCss from '../../../assets/css/myjuooo/myAccountSafe.module.css'


class MyAccountSafe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: localStorage.phoneNumber,
            captcha: null,
            upCode: '',
            password1: '',
            password2: ''
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //获取验证码
    async getMsgCode() {
        let num = 5;
        this.getCodeBtn.disabled = true;
        const timer = setInterval(() => {
            this.getCodeBtn.value = num;
            if (num < 1) {
                clearInterval(timer);
                this.getCodeBtn.disabled = false;
                this.getCodeBtn.value = '获取验证码';
            }
            num--;
        }, 1000);
        const phoneNumber = this.state.phoneNumber;
        const data = await axios.post('/userLogin/userGetCaptcha', { phoneNumber });
        if (data.ok === 1) {
            this.setState({
                captcha: data.captcha / 1
            })
        } else {
            this.failToast(data.msg);
        }
    }

    //设置或修改密码
    async upDatePwd() {
        const { phoneNumber, password1, password2, upCode, captcha } = this.state;
        if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
            Toast.fail('请输入正确的手机号', 1);
            this.phoneNumber.value = '';
            return false;
        }
        else if (!(upCode / 1 === captcha)) {
            Toast.fail('请输入正确的验证码', 1);
            this.upCode.value = '';
            return false;
        } else if (!password1 === password2) {
            Toast.fail('密码输入不一致', 1, () => {
                this.password1.value = '';
                this.password2.value = '';
            });
            return false
        } else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(password1))) {
            Toast.fail('密码格式错误', 1, () => {
                this.password1.value = '';
                this.password2.value = '';
            });
            return false
        } else {
            const data = await axios.post('/userLogin/userMsg', { phoneNumber, password1 });
            if (data.ok === 1) {
                this.props.history.go(-1);
            }
        }
    }
    render() {
        return (
            <div>
                <PageHeaderWhite pageName={'账号安全'}></PageHeaderWhite>
                <div className={myAccountSafeCss.containItem}>
                    <span>手机号:</span>
                    <b>{localStorage.phoneNumber}</b>
                </div>
                <div className={myAccountSafeCss.containItem}>
                    <span>验证码:</span>
                    <input type="text" value={this.state.upCode}
                        name='upCode'
                        ref={upCode => this.upCode = upCode}
                        onChange={this.handleChange.bind(this)}
                        placeholder='请输入验证码'
                        className={myAccountSafeCss.codeInt} />
                    <span style={{ width: '60px' }}>{this.state.captcha ? this.state.captcha : ''}</span>
                </div>
                <input type="button" value="获取验证码"
                    name='getCodeBtn'
                    ref={getCodeBtn => this.getCodeBtn = getCodeBtn}
                    onClick={this.getMsgCode.bind(this)}
                    className={myAccountSafeCss.getCodeBtn}
                />
                {this.state.captcha ?
                    <div className={myAccountSafeCss.changePasswordInt}>
                        <div className={myAccountSafeCss.containItem}>
                            <span>输入密码:</span>
                            <input type="text" value={this.state.password1}
                                name='password1'
                                ref={password1 => this.password1 = password1}
                                onChange={this.handleChange.bind(this)}
                                placeholder='请输入6-12位数字字母组合' />
                        </div>
                        <div className={myAccountSafeCss.containItem}>
                            <span>确认密码:</span>
                            <input type="text" value={this.state.password2}
                                name='password2'
                                ref={password2 => this.password2 = password2}
                                onChange={this.handleChange.bind(this)}
                                placeholder='请输入6-12位数字字母组合' />
                        </div>

                        <button
                            onClick={this.upDatePwd.bind(this)}
                            className={myAccountSafeCss.updataBtn}>保存</button>
                    </div> : ''
                }

            </div>
        );
    }
}

export default MyAccountSafe;