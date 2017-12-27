
let buf = Buffer.alloc(15);




 len = buf.write("zyyyyyyy");

 var json = buf.toJSON(buf);

console.log(json);
console.log("写入的字节数："+len)

