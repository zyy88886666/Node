
let buf = Buffer.alloc(15);




 len = buf.write("zyyyyyyy");

 var json = buf.toJSON(buf);

console.log(json);
console.log("写入的字节数："+len)

const buf1 = Buffer.alloc(5, 'a');
// 输出: <Buffer 61 61 61 61 61>
console.log("buf1的数据："+buf1);


const buf2 = Buffer.alloc(11, '12345678902', 'ascii');
console.log("buf2的数据："+buf2);