const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

// 连接数据库
function _connect() {
    return new Promise((resolve, reject) => {
        mongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true }, (err, client) => {
            if (err)
                reject("连接数据库失败")
            else
                resolve(client.db("myjuooo"));
        })
    })
}

module.exports = {
    // 插入一条
    async insertOne(collName, insertObj) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).insertOne(insertObj, (err, results) => {
                if (err) reject("插入失败");
                else resolve("插入成功")
            })
        })
    },
    // 查找一条
    async findOne(collName, whereObj) {
        const db = await _connect();// 获得你要操作的数据库
        return new Promise((resolve, reject) => {
            db.collection(collName).findOne(whereObj, (err, result) => {
                if (err)
                    reject("查找失败")
                else
                    resolve(result);
            })
        })

    },
    // 更新一条信息
    async updateOne(collName, whereObj, upObj) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).updateOne(whereObj, upObj, function (err, result) {
                if (err) reject("更新失败")
                else resolve("更新成功")
            })
        })

    },
    // 查找多条
    async find(collName, obj = {}) {
        // 解构赋值。
        const { skip = 0, limit = 0, sort = {}, whereObj = {} } = obj;
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sort).toArray((err, results) => {
                if (err) reject("获取信息失败")
                else resolve(results);
            })
        });
    },
    //查找总数
    async count(collName, whereObj = {}) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).countDocuments(whereObj).then(count => {
                resolve(count);
            })
        })
    },
    //根据Id查找一条
    async findOneById(collName, id) {
        const db = await _connect();// 获得你要操作的数据库
        return new Promise((resolve, reject) => {
            db.collection(collName).findOne({
                _id: mongodb.ObjectId(id)
            }, (err, result) => {
                if (err)
                    reject("查找失败")
                else
                    resolve(result);
            })
        })

    },
    //  根据ID进行数据的删除
    async deleteOneById(collName, id) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).deleteOne(id, function (err, reuslts) {
                if (err) reject("删除失败")
                else resolve("删除成功")
            })
        })
    },

    // 按照Id来更新信息
    async updateOneById(collName, Id, upObj) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).updateOne({ _id: mongodb.ObjectId(Id) }, upObj, function (err, result) {
                if (err) reject("更新失败")
                else resolve("更新成功")
            })
        })
    },

    async page(collName, { whereObj = {}, pageIndex = 1, limit = 5, sort = {} } = {}) {
        let pageSum = 1;
        const count = await this.count(collName, whereObj);
        pageSum = Math.ceil(count / limit);
        if (pageIndex < 1) pageIndex = 1;
        if (pageSum < 1) pageSum = 1;
        if (pageIndex > pageSum) pageIndex = pageSum;
        const results = await this.find(collName, {
            whereObj,
            limit,
            sort,
            skip: (pageIndex - 1) * limit
        })
        return {
            ok: 1,
            [collName]: results,
            pageIndex,
            pageSum
        }
    },
}