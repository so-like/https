// promise执行流程、

// 首先导包
const fs = require("fs");

// 定义一个promise它有两个参数第一个为成功跳转参数，第二个为失败跳转参数
// resolve和reject不需要去声明因为浏览器得js引擎已经帮我们声明好了
const promise = new Promise((resolve,reject)=>{
    fs.readFile(`${__dirname}/etc/01.txt`,'utf-8',(err,data)=>{
        if(!err){
            // 异步操作执行成功后调用solve方法
            // 将我们的promise状态有pending(进行中)-->fulfilled(已成功)；
            resolve(data);
        }else{
            // 一步操作执行失败后调用reject方法
            // 将我们的promise状态有pending(进行中)-->rejected(已经失败)
            reject(err);
        }
    })
});

// 承诺then方法它有两个参数函数第一个为成功后执行第二个为失败后执行
promise.then((data)=>{
    console.log(data);
    // then的第二个参数为可选项
}),(err)=>{
    console.log(err);
}


