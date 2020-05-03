const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2.js");
const tools = require('./module/tools')
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
                data: {
                    ok: -1,
                    msg: "请不要频繁获取验证码"
                }
            })
        } else {
            res.json({
                data: {
                    ok: 1,
                    msg: "获取验证码成功",
                    captcha
                }
            });
            db.updateOne("userCaptchaList", { phoneNumber }, {
                $set: {
                    sendTime: Date.now()
                }
            })
        }
    } else {
        res.json({
            data: {
                ok: 1,
                msg: "获取验证码成功",
                captcha
            }
        });
        db.insertOne("userCaptchaList", {
            phoneNumber,
            sendTime: Date.now()
        })
    }
})

//用户登录
app.post("/userLoginto", async (req, res) => {
    const { phoneNumber, captcha } = req.body;
    const result = await db.findOne("userCaptchaList", { phoneNumber });
    if (Date.now() - result.sendTime >= 60 * 1000) {
        res.json({
            data: {
                ok: -1,
                msg: '验证码已过期，请重新登录'
            }
        })
    } else {
        const userInfo = await db.findOne("userList", { phoneNumber, captcha });
        if (userInfo) {
            db.updateOne('userList', { phoneNumber }, {
                $set: {
                    lastLoginTime: Date.now()
                }
            });
            res.json({
                data: {
                    ok: 1,
                    msg: '登录成功',
                    userInfo
                }
            })
        } else {
            db.insertOne('userList', {
                phoneNumber,
                regTIme: Date.now(),
                lastLoginTime: Date.now(),
            });
            res.json({
                data: {
                    ok: 1,
                    msg: '登录成功'
                }
            })
        }
    }
})

//更新个人信息
app.post("/userMsg", async (req, res) => {
    const { phoneNumber, username, email, password1, birthday, id_name, id_number } = req.body;
    try {
        const result = await db.updateOne("userList", { phoneNumber }, {
            $set: {
                username,
                email,
                password: password1,
                birthday,
                id_name, id_number
            }
        });
        res.json({
            data: {
                ok: 1,
                msg: "写入成功"
            }
        })
    }
    catch{
        res.json({
            data: {
                ok: -1,
                msg: "写入失败"
            }
        })
    }
})
//获取购票人
app.post('/spectatorMsg', async (req, res) => {
    const { phoneNumber } = req.body;
    const result = await db.findOne('userList', { phoneNumber });
    if (result) {
        res.json({
            data: {
                ok: 1,
                msg: '获取成功',
                result
            }
        })
    } else {
        res.json({
            data: {
                ok: -1,
                msg: '获取失败'
            }
        })
    }
})

app.listen(8085, function () {
    console.log('success');
})