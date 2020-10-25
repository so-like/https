const express = require("express");

const app = express();


app.use((req,res,next) =>{
    console.log("login1");
    next()
});

app.use((req,res,next) =>{
    console.log("logi2");
    // next起到的是桥梁作用将这个中间件执行完毕后传给下一个中间件
    next()
});

app.use((req,res,next) =>{
    console.log("login3");
    next()
});

app.get("/",(req,res)=>{
    res.send("我是next啊");
})

app.listen(4399,()=>{
    console.log("服务器已经开启");
})