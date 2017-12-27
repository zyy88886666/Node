var fs = require("fs");

var data = "123 ";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("utf8");

readerStream.on("data",function(chunk){
   data += chunk;
})

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

var writeStream = fs.createWriteStream("output.txt");

readerStream.pipe(writeStream);
console.log("程序执行完毕");

var zlib = require("zlib");
fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input.txt"));

console.log("文件压缩完成");

console.log(__filename);

