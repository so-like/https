const express = require('express');

const app = express();

app.get("/app",(req,res)=>{
    res.send(`${req.query.callback}({"name":"老王"});`)

})

app.listen(4399,()=>{
    console.log("服务器已经开启");
})