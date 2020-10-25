const express = require("express");

const app = express();

app.get("/all",(req,res)=>{
    // res.send(`console.log("哈哈哈")`);
    // console.log(req.query.callback);
    // 返回一个调用
    // console.log(req.query.callback);//这里就能拿到前端准备好的函数
    res.send(`${req.query.callback}();`)
})

app.listen(4399,()=>{
    console.log("服务器已经开启");
})