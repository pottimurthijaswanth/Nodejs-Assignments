var http = require('http');

var server = http.createServer(function(req,res) {
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hey products');
});

server.listen(3000, '127.0.0.1');
console.log("Success,i am listeningfrom port: 3000");
