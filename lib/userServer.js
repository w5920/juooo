const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2.js");

const app = express();
app.use(express.static(__dirname + '/upload'));

app.use(bodyParser.json());

//用户获取验证码
app.post("/userGetCaptcha", async (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const result = await db.findOne("userCaptchaList", { phoneNumber });
    const captcha = tools.captcha(100000, 999999);
    if (result) {
        if (result.sendTime - Date.now < 60 * 1000) {
            res.json({
                ok: -1,
                msg: "请不要频繁获取验证码"
            })
        } else {
            res.json({
                ok: 1,
                msg: "获取验证码成功",
                captcha
            });
            db.updateOne("userCaptchaList", { phoneNumber }, {
                $set: {
                    sendTime: Date.now()
                }
            })
        }
    } else {
        res.json({
            ok: 1,
            msg: "获取验证码成功",
            captcha
        });
        db.insertOne("userCaptchaList", {
            phoneNumber,
            sendTime: Date.now()
        })
    }
})
//用户注册
app.post('/userRegister', async (req, res) => {
    const { phoneNumber, passWord, code } = req.body;
    const result = await db.findOne("userCaptchaList", { phoneNumber });
    if ((Date.now() - result.sendTime >= 60 * 1000)) {
        res.json({
            ok: -1,
            msg: '验证码已过期'
        })
    } else {
        await db.insertOne('userList', {
            phoneNumber,
            passWord,
            regTIme: Date.now(),
            lastLoginTime: Date.now(),
        });
        res.json({
            ok: -1,
            msg: '注册成功',
        })
    }
})



//用户登录
app.post("/userLoginto", async (req, res) => {
    const { phoneNumber, passWord, code } = req.body;
    const result = await db.findOne("userCaptchaList", { phoneNumber });
    if (Date.now() - result.sendTime >= 60 * 1000) {
        res.json({
            ok: -1,
            msg: '验证码已过期，请重新登录'
        })
    } else {
        const userInfo = await db.findOne("userList", { phoneNumber, passWord });
        if (userInfo) {
            db.updateOne('userList', { phoneNumber }, {
                $set: {
                    lastLoginTime: Date.now()
                }
            });
            res.json({
                ok: 1,
                msg: '登录成功',
                userInfo
            })
        } else {
            res.json({
                ok: -1,
                msg: '账号或密码错误'
            })
        }
    }
})

app.listen(8085, function () {
    console.log('success');
})