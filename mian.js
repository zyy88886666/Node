//阻塞代码  代码顺序执行

var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("程序执行结束！")
//hello world!zyy
//程序执行结束!
