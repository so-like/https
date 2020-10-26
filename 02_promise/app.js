const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors())

app.get("/all",(req,res)=>{
    res.send(req.query.username);
})

app.listen(4399,()=>{
    console.log("服务器已经启动");
})