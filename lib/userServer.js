const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2.js");
const tools = require("./module/tools");
const app = express();
app.use(express.static(__dirname + "/upload"));

app.use(bodyParser.json());

//用户获取验证码
app.post("/userGetCaptcha", async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const result = await db.findOne("userCaptchaList", { phoneNumber });
  const captcha = tools.captcha(100000, 999999);
  if (result) {
    if (result.sendTime - Date.now < 300 * 1000) {
      res.json({
        data: {
          ok: -1,
          msg: "请不要频繁获取验证码",
        },
      });
    } else {
      res.json({
        data: {
          ok: 1,
          msg: "获取验证码成功",
          captcha,
        },
      });
      db.updateOne(
        "userCaptchaList",
        { phoneNumber },
        {
          $set: {
            sendTime: Date.now(),
          },
        }
      );
    }
  } else {
    res.json({
      data: {
        ok: 1,
        msg: "获取验证码成功",
        captcha,
      },
    });
    db.insertOne("userCaptchaList", {
      phoneNumber,
      sendTime: Date.now(),
    });
  }
});

//用户登录
app.post("/userLoginto", async (req, res) => {
  const { phoneNumber, password, regCode } = req.body;
  if (password) {
    const userInfo = await db.findOne("userList", { phoneNumber, password });
    if (userInfo) {
      res.json({
        data: {
          ok: 1,
          msg: '登录成功',
          userInfo
        }
      })
    }
  } else {
    const result = await db.findOne("userCaptchaList", { phoneNumber });
    if (Date.now() - result.sendTime >= 60 * 1000) {
      res.json({
        data: {
          ok: -1,
          msg: '验证码已过期，请重新登录'
        }
      })
    } else {
      const userInfo = await db.findOne("userList", { phoneNumber });
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
        await db.insertOne('userList', {
          phoneNumber,
          regTIme: Date.now(),
          lastLoginTime: Date.now(),
        });
        const userInfo = await db.findOne("userList", { phoneNumber });
        res.json({
          data: {
            ok: 1,
            msg: '登录成功',
            userInfo
          }
        })
      }
    }
  }
});

//更新个人信息
app.post("/userMsg", async (req, res) => {
  try {
    const { phoneNumber, username, email, password1, birthday, id_name, id_number, } = req.body;
    await db.updateOne("userList", { phoneNumber }, {
      $set: {
        username,
        email,
        password: password1,
        birthday,
        id_name,
        id_number,
      },
    }
    );
    res.json({
      data: {
        ok: 1,
        msg: "写入成功",
      },
    });
  } catch {
    res.json({
      data: {
        ok: -1,
        msg: "写入失败",
      },
    });
  }
});
//获取购票人
app.post("/spectatorMsg", async (req, res) => {
  const { phoneNumber } = req.body;
  const result = await db.findOne("userList", { phoneNumber });
  if (result) {
    res.json({
      data: {
        ok: 1,
        msg: "获取成功",
        result,
      },
    });
  } else {
    res.json({
      data: {
        ok: -1,
        msg: "获取失败",
      },
    });
  }
});

//添加收货地址
app.post("/shippingAddress", async (req, res) => {
  const {
    phoneNumber,
    consignee_name,
    consignee_number,
    disdtict,
    street,
    is_default,
  } = req.body;
  try {
    await db.insertOne("shippingAddressList", {
      phoneNumber,
      consignee_name,
      consignee_number,
      disdtict,
      street,
      is_default,
      addTime: Date.now(),
      upDateTime: Date.now(),
    });
    res.json({
      data: {
        ok: 1,
        msg: "添加成功",
      },
    });
  } catch (err) {
    res.json({
      data: {
        ok: -1,
        msg: "添加失败",
      },
    });
  }
});

//获取收货地址
app.post('/shippingAddressList', async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const shippingAddressList = await db.find('shippingAddressList', {
      whereObj: {
        phoneNumber
      },
      sort: {
        upDateTime: -1
      }
    });
    res.json({
      data: {
        ok: 1,
        msg: '获取成功',
        shippingAddressList
      }
    })
  } catch{
    res.json({
      data: {
        ok: -1,
        msg: '获取失败'
      }
    })
  }
})

//更新收货地址
app.put('/shippingAddress', async (req, res) => {
  const { phoneNumber, consigneeName, consigneePhone, disdtict, street, is_default } = req.body;
  try {
    await db.insertOne('shippingAddressList', {
      phoneNumber,
      consigneeName,
      consigneePhone,
      disdtict,
      street,
      is_default,
      upDateTime: Date.now()
    });
    const shippingAddressList = await db.find('shippingAddressList', {
      whereObj: {
        phoneNumber
      },
      sort: {
        upDateTime: -1
      }
    });
    res.json({
      data: {
        ok: 1,
        msg: '修改成功',
        shippingAddressList
      }
    })
  } catch (err) {
    res.json({
      data: {
        ok: -1,
        msg: '修改失败'
      }
    })
  }
})


app.listen(8085, function () {
  console.log("success");
});
