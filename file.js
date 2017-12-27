var fs =  require("fs");

console.log("准备打开文件！");
fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("文件打开成功！");
})


console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});


console.log("准备写入文件！");
fs.writeFile("input.txt","我是写入的文件内容！",function(err){
	if(err){
		return console.error(err);
	}
	console.log("数据写入成功！")
	console.log("-------------我是分割线---------------")
	console.log('读取写入的数据!');
	fs.readFile("input.txt",function(err,data){
		if(err) return console.error(err);
		console.log("异步读取文件数据："+data.toString());
	})

})