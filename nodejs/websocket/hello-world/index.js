const websock   = require('ws')
const wss = new websock.Server({port: 8082});



wss.on("connection", ws => {

console.log("new cline");



ws.on("message", data  => {

console.log(`client has sent: ${data}`);
for (i=0; i<10; i++){
ws.send(i);
}

});

ws.on("close", ()=> {

	console.log("clinet dsc");
	

});
});
