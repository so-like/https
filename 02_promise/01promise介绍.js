// promise的介绍
// 是用来解决回调地狱的 我们的需求是一次的去执行异步代表
// 我们的做法是在异步请求的回调函数里执行下一个异步请求
// ？promise用法

// 导入文件系统模块
const fs = require("fs");

// 因为fs.readFile是异步执行的所以执行顺序大不相同我们可以将下一个执行的文件放到上一个异步执行的回调函数里
// 这样可以保证按顺序执行，但这样就出现了回调地狱(回调函数中嵌套了回调函数，代码的阅读性差，而且不利于代码维护看着让人害怕)


// promise的catch方法是将then()中的err捕获，而all是将所有的promise集合在一起然后集中执行，如果有一个执行错误那么他就会报错
// promise的race的方法就是这些promise集合中只要有一个成功那么他就成功(这是与catch方法不同的一点)


// fs.readFile的第一个参数为文件路径我们在这里拼一个文件路径 使用模板字符
// 读取文件一
fs.readFile(`${__dirname}/etc/01.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);

    // 读取文件2
    fs.readFile(`${__dirname}/etc/02.txt`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);

        // 读取文件3
        fs.readFile(`${__dirname}/etc/03.txt`, "utf-8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          });
      }
    });
  }
});

// // 读取文件2
// fs.readFile(`${__dirname}/etc/02.txt`, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 读取文件3
// fs.readFile(`${__dirname}/etc/03.txt`, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
