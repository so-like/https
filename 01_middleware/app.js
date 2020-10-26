const express = require("express");

const app = express();

app.get("/all",(req,res)=>{
    // res.send(`console.log("哈哈哈")`);
    // console.log(req.query.callback);
    // 返回一个调用
    // console.log(req.query.callback);//这里就能拿到前端准备好的函数
    // 这样就不会写死而是一个动态的框号里的返回给前台会被当做js代码处理
    res.send(`${req.query.callback}({'name':"波波",'age':18});`)
})

app.listen(4399,()=>{
    console.log("服务器已经开启");
})