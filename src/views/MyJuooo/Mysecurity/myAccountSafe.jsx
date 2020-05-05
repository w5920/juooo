import React, { Component } from 'react';
import PageHeaderWhite from '../../../components/common/PageHeaderWhite'

import myAccountSafeCss from '../../../assets/css/myjuooo/myAccountSafe.module.css'

class MyAccountSafe extends Component {
    render() {
        return (
            <div>
                <PageHeaderWhite pageName={'账号安全'}></PageHeaderWhite>
                <div className={myAccountSafeCss.containItem}>
                    <span>手机号</span>
                    <b>{localStorage.phoneNumber}</b>
                </div>
                <div className={myAccountSafeCss.containItem}>
                    <span>修改密码</span>
                    <input type="text" value="" placeholder='请输入验证码' className={myAccountSafeCss.codeInt} />
                    <input type="button" value="获取验证码" className={myAccountSafeCss.getCodeBtn} />
                </div>

                {
                    <div className={myAccountSafeCss.changePasswordInt}>
                        <div className={myAccountSafeCss.containItem}>
                            <span>输入密码</span>
                            <input type="text" value="" placeholder='请输入新密码' />
                        </div>
                        <div className={myAccountSafeCss.containItem}>
                            <span>确认密码</span>
                            <input type="text" value="" placeholder='请再次输入新密码' />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MyAccountSafe;