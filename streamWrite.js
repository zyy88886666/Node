var fs = require("fs");

var writeStream = fs.createWriteStream("output.txt");

var data = "丹露，我喝我分享";

writeStream.write(data,"utf8");

// 标记文件末尾
writeStream.end();

writeStream.on("finish",function(){
	console.log('文件写入完成！');
})

writeStream.on("end",function(err){
	console.log(err.stack);
})

console.log("程序执行完毕！");