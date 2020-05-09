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
            password: '',
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async register() {
        //验证手机号 验证码是否正确
        const { phoneNumber, password } = this.state;
        if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
            Toast.fail('请输入正确的手机号', 1);
            this.phoneNumber.value = '';
            this.password.value = '';
            return false;
        }
        else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(password))) {
            Toast.fail('密码格式错误', 1, () => {
                this.password.value = '';
            });
            return false
        } else {
            const data = await axios.post('/userLogin/userLoginto', { phoneNumber, password });
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
    render() {
        return (
            <div>
                <PageHeaderWhite pageName={'登录'} rightShow={false}></PageHeaderWhite>
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
                    <p className={registerCss.phoneNumber}>
                        <input ref={password => this.password = password}
                            placeholder={'请输入密码'}
                            onChange={this.handleChange.bind(this)}
                            name='password'
                            type="password" />
                    </p>
                    <button onClick={this.register.bind(this)}>立即登录</button>
                    <h5 className={registerCss.regWay}>
                        <span>邮箱注册</span>
                        <a href="/Register"><span>快速注册</span></a>
                    </h5>
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