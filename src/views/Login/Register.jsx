import React, { Component } from 'react';
import axios from 'axios'
import PageHeaderWhite from '../../components/common/PageHeaderWhite';
import registerCss from '../../assets/css/login/register.module.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            passWord: '',
            code: '',
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async getMsgCode() {
        const phoneNumber = this.phoneNumber.value;
        const data = await axios.post('/userLogin/userGetCaptcha', { phoneNumber });
        console.log(data);
    }
    async register() {
        const { phoneNumber, passWord, code } = this.state;
        const data = await axios.post('/userLogin/userLoginto', { phoneNumber, passWord, code });
        console.log(data);
    }
    render() {
        return (
            <div>
                <PageHeaderWhite pageName={'注册'} rightShow={false}></PageHeaderWhite>
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
                        <input ref={phoneNumber => this.phoneNumber = phoneNumber}
                            placeholder={'请输入密码'}
                            onChange={this.handleChange.bind(this)}
                            type="password" />
                    </p>
                    <p className={registerCss.regCode}>
                        <input ref={regCode => this.regCode = regCode}
                            placeholder={'请输入验证码'}
                            type="text" />
                        <i ref={code => this.code = code} onClick={this.getMsgCode.bind(this)}> 获取验证码</i>
                    </p>
                    <h6>未注册的手机号将自动创建会员账号</h6>
                    <button onClick={this.register.bind(this)}>立即注册</button>
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