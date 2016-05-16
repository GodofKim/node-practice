var server = require('net').createServer(function(socket){
	server.on('connection',function(){
		console.log('왔다 왔어');
	});

	server.on('end',function(){
		console.log('서버 종료');
	});

	socket.on('data',function(data){
		console.log(data.ToString());
	});

});