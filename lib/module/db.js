const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;//
const ObjectId = mongodb.ObjectId;
// 1、封装之后的代码尽量不要去改动
// 2、封装之后的代码尽量的满足不同的需求。
function _connect(cb){
    mongoClient.connect("mongodb://127.0.0.1:27017",{useUnifiedTopology: true },(err,client)=>{
        if(err) console.log("连接失败")
        else{
            const db = client.db("ele");
            cb(db);
        }
    })
}
module.exports = {
    /*
    * 插入一条记录。
    * collName:指定插入的集合
    * insertObj:插入的内容*/
    insertOne(collName,insertObj,cb){
        _connect(db=>{
            db.collection(collName).insertOne(insertObj,(err,results)=>{
                cb(err,results);
            })
        })
    },
    /*
    * 查找多条数据
    * collName:指定集合
    * obj:是一个对象，包含sort,limit,skip,whereObj*/
    find(collName,obj={},cb){
        // 解构赋值。
        const {skip=0,limit=0,sort={},whereObj={}} = obj;
        _connect(db=>{
            db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sort).toArray((err,results)=>{
                cb(err,results);
            })
        })
    },
    findOne(collName,whereObj,cb){
        _connect(db=>{
            db.collection(collName).findOne(whereObj,cb);
        })
    },
    // 根据ID获得详情。
    findOneById(collName,id,cb){
        _connect(db=>{
            // 查找一条信息,findOne 第一个参数是条件，第二个参数是回调
            db.collection(collName).findOne({
                _id:ObjectId(id)
            },cb)
        })
    },
    /**
     * 根据条件获得文档的数量
     * collName:指定集合的名字
     * whereObj:条件
     * cb:回调函数（返回结果）
     */
    count(collName,whereObj,cb){
        _connect(db=>{
            db.collection(collName).countDocuments(whereObj).then(count=>{
                cb(count);
            })
        })
    },
    // 根据ID进行删除一条操作,并返回删除以后的结果
    deleteOneById(collName,id,cb){
        _connect(db=>{
            // 语法。find insertOne,insertMany ,deleteOne
            // 第一个参数是删除的条件。第二个参数是一个回调函数，用于接收结果
            // db.collection(collName).deleteOne({
            //     _id:ObjectId(id),// 将字符串转为ObjectId
            // },function (err,results) {
            //     cb(err,results);
            // })

            db.collection(collName).deleteOne({
                _id:ObjectId(id),// 将字符串转为ObjectId
            },cb)
        })
    },
    // 根据ID进行修改。
    upDateOneById(collName,id,upObj,cb){
        _connect(db=>{
            // 第一个参数是条件，第二个参数是修改的内容，第三个参数是回调函数
            db.collection(collName).updateOne({
                _id:ObjectId(id)
            },upObj,cb)
        })
    }


}
