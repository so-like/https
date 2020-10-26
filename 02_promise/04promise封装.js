// 首先导包
// const fs = require("fs");

// // promise一旦创建就会立即执行所以不要再promise中些其他代码
// // 异步执行代码会被挂起等主程序执行完后再去执行


// // 定义一个promise它有两个参数第一个为成功跳转参数，第二个为失败跳转参数
// // resolve和reject不需要去声明因为浏览器得js引擎已经帮我们声明好了
// const promise = new Promise((resolve,reject)=>{
//     console.log("的凯立德的");
//     fs.readFile(`${__dirname}/etc/01.txt`,'utf-8',(err,data)=>{
//         if(!err){
//             // 异步操作执行成功后调用solve方法
//             // 将我们的promise状态有pending(进行中)-->fulfilled(已成功)；
//             resolve(data);
//         }else{
//             // 一步操作执行失败后调用reject方法
//             // 将我们的promise状态有pending(进行中)-->rejected(已经失败)
//             reject(err);
//         }
//     })
// });

// // 承诺then方法它有两个参数函数第一个为成功后执行第二个为失败后执行
// promise.then((data)=>{
//     console.log(data);
//     // then的第二个参数为可选项
// }),(err)=>{
//     console.log(err);
// }

// console.log("柔肤水");


// -------------------------------------------------------------------------------
// promise的封装

// 首先导包
const fs = require("fs");

// promise一旦创建就会立即执行所以不要再promise中些其他代码
// 异步执行代码会被挂起等主程序执行完后再去执行


// 定义一个promise它有两个参数第一个为成功跳转参数，第二个为失败跳转参数
// resolve和reject不需要去声明因为浏览器得js引擎已经帮我们声明好了
function getPromise(filename){
    return new Promise((resolve,reject)=>{
        // console.log("的凯立德的");
        fs.readFile(`${__dirname}/etc/${filename}.txt`,'utf-8',(err,data)=>{
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
    
}
// 承诺then方法它有两个参数函数第一个为成功后执行第二个为失败后执行

// 异步操作实际上是没有顺序的，只是将then方法获取到数据之后压一会，等全部获取完后再按顺序给
getPromise('01').then((data)=>{
    console.log(data);
   //上边执行完后return一个getpromise("02")相当于在下边又调用了一次
    return getPromise('02')
}).then((data)=>{
    console.log(data);
   
    return getPromise('03');
}).then((data)=>{
    console.log(data);
    
});




