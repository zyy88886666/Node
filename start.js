var http = require("http");
var url = require("url");

function start(){
	http.createServer(function(req.res){
		var url = url.parse(req.url).pathname ;
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("zyy");
		res.end();

	}).listen(8888);

}


exports.start =start;
