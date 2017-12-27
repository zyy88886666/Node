var fs = require("fs");

var  readStream = fs.createReadStream("input.txt");

var writeStream = fs.creatWriteStream("output.txt");


//读取input.txt文件内容，并将内容写入到output.txt文件中
readStream.pipe(writeStream);

console.log("程序执行完毕！");



var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");


// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");