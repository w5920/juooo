import React, { Component } from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Icon, NavBar } from "antd-mobile";
import axios from 'axios'
import pageHeaderWhiteCss from '../../assets/css/component/pageHeaderWhite.module.css';
import registerCss from '../../assets/css/login/register.module.css'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            captcha: null,
            regCode: ''
        }
    }
    handleChange(e) {
        console.log([e.target.name], e.target.value);
        this.setState({
            [e.target.name]: e.target.value / 1
        })
    }
    async getMsgCode() {
        const phoneNumber = this.state.phoneNumber;
        if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
            Toast.fail('请输入正确的手机号', 1, () => {
                this.phoneNumber.value = '';
            });
            return false;
        }
        const data = await axios.post('/userLogin/userGetCaptcha', { phoneNumber });
        if (data.ok === 1) {
            this.setState({
                captcha: data.captcha / 1
            })
        } else {
            this.failToast(data.msg);
        }
    }

    async register() {
        //验证手机号 验证码是否正确
        const { phoneNumber, regCode, captcha } = this.state;
        console.log(phoneNumber, regCode, captcha);
        if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
            Toast.fail('请输入正确的手机号', 1);
            this.phoneNumber.value = '';
            return false;
        }
        else if (!(regCode === captcha)) {
            Toast.fail('请输入正确的验证码', 1);
            this.regCode.value = '';
            return false;
        } else {
            const data = await axios.post('/userLogin/userLoginto', { phoneNumber, regCode });
            if (data.ok === 1) {
                localStorage.is_login = 1;
                localStorage.phoneNumber = phoneNumber;
                localStorage._id = data.userInfo._id.slice(-6);
                Toast.success('登录成功', 1, () => {
                    this.props.history.go(-1);
                });

            } else {
                this.failToast(data.msg);
            }
        }
    }
    //返回按钮跳转来源
    leftBack() {
        if (this.props.location.state) {
            this.props.history.push(this.props.location.state);
        } else {
            this.props.history.go(-2);
        }
    }
    render() {
        console.log(2222, this.props);
        return (
            <div>
                <NavBar
                    className={pageHeaderWhiteCss.am}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.leftBack.bind(this)}
                >
                    登录/注册
                </NavBar>

                <div className={registerCss.container}>
                    <div className={registerCss.register_logo}>
                        <img src={require('../../assets/img/login_logo.png')} />
                    </div>
                    <p className={registerCss.phoneNumber}>
                        <span>+86</span>
                        <input ref={phoneNumber => this.phoneNumber = phoneNumber}
                            style={{
                                background: '#fff'
                            }}
                            onChange={this.handleChange.bind(this)}
                            placeholder={'请输入手机号'}
                            name='phoneNumber'
                            type="tel" />
                    </p>
                    <p className={registerCss.regCode}>
                        <input ref={regCode => this.regCode = regCode}
                            style={{
                                background: '#fff'
                            }}
                            onChange={this.handleChange.bind(this)}
                            placeholder={'请输入验证码'}
                            name="regCode"
                            type="text" />
                        <i>{this.state.captcha}</i>
                    </p>
                    <h6>未注册的手机号将自动创建会员账号</h6>
                    <button onClick={this.state.captcha ? this.register.bind(this) : this.getMsgCode.bind(this)}>{this.state.captcha ? '立即登录' : '获取验证码'}</button>
                    <h5 className={registerCss.regWay}>
                        <a href=""><span>邮箱注册</span></a>
                        <a href="/Login"><span>密码登录</span></a>
                    </h5>
                </div>
                <div className={registerCss.register_foot}>
                    <span>其他登录方式</span>
                    <img src={require('../../assets/img/login_qq.png')} />
                    <img src={require('../../assets/img/weibo.png')} />
                </div>
            </div >
        );
    }
}

export default Register;