var  events = require("events");

var  eventEmitter = new events.EventEmitter();

//监听器1
var  listener1 = function listener1(){
	console.log("监听器1执行！");
}


//监听器2
var listener2 = function listener2(){
	console.log("监听器2执行！");
}


// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.on("connection",listener1);
// 绑定 connection 事件，处理函数为 listener2
eventEmitter.addListener("connection",listener2);

var eventListenCount = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListenCount+"个监听器监听连接事件。");


// 处理 connection 事件 即触发这个事件
eventEmitter.emit('connection');


// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener2);
console.log("listener2 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListenCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListenCount + " 个监听器监听连接事件。");

console.log("程序执行完毕。");