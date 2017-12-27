var fs = require("fs");

var data = "danlu ";

//创建可读取的流
var readStream= fs.createReadStream("input.txt");

//设置编码为utf8
readStream.setEncoding("UTF8");

readStream.on("data",function(chunk){
    data +=chunk;
})

readStream.on("end",function(){
	console.log(data);
})

readStream.on("error",function(err){
	console.log(err.stack);
})

console.log("程序执行完毕！");