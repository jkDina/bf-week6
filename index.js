const url = require('url');
const http = require('http');
const fs = require('fs');
http.createServer( function(request, response){
    console.log(url.parse(request.url, true)['pathname']);
    let url_ = url.parse(request.url, true)['pathname'];
    let filepath;
	if (url_[url_.length - 1] == '/') url_ = url_.slice(0, -1);
	
	
	if (url_.indexOf('/js') > -1) {
        filepath = __dirname + '/public' + url_.slice(url_.indexOf('/js'));
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
    } else if (url_.indexOf('/css') > -1) {
        filepath = __dirname + '/public' + url_.slice(url_.indexOf('/css'));
        response.setHeader('Content-Type', 'text/css; charset=utf-8');
	} else if (url_.indexOf('/images') > -1) {
        filepath = __dirname + '/public' + url_.slice(url_.indexOf('/images'));
        response.setHeader('Content-Type', 'image/png; charset=utf-8');
	} else if (url_.indexOf('/fonts') > -1) {
        filepath = __dirname + '/public' + url_.slice(url_.indexOf('/fonts'));
        response.setHeader('Content-Type', 'image/png; charset=utf-8');
    } else {
        filepath = __dirname + '/public/index.html';
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    }

    fs.readFile(filepath, (err, data) => {
		if (err) throw err;
		response.end(data);
	});
}).listen(8080);
