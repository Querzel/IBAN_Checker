
var checkiban = require('./checkiban.js');
var http=require('http');
var util=require('util');
var querystring=require('querystring');


//var http = require('http');
var url = require('url');


//Invalid Iban Numbers
//http://localhost:8888/?iban=111


//Valid Iban Numbers
//http://localhost:8888/?iban=AL47212110090000000235698741
//http://localhost:8888/?iban=AD1200012030200359100100
//http://localhost:8888/?iban=AE070331234567890123456
//http://localhost:8888/?iban=AT611904300234573201
//http://localhost:8888/?iban=AZ21NABZ00000000137010001944
//http://localhost:8888/?iban=BA391290079401028494
//http://localhost:8888/?iban=BE68539007547034
//http://localhost:8888/?iban=BA391290079401028494

// Configure  IBAN HTTP server to respond with to all requests.
var server = http.createServer(function (request, response) 
{
	var queryData = url.parse(request.url, true).query;
	response.writeHead(200, {"Content-Type": "text/plain"});
	//if (queryData.name) 
	if (queryData.iban) 
	{
		var i = queryData.iban;
		var result = checkiban.checkiban(i);
		response.end(queryData.iban + '   is' + result);	
		//response.end('hello' + queryData.iban + '\n');
		//response.end('Hello ' + queryData.name + '\n');
	} 
	else 
	{
		response.end("Hello, This is IBAN Server\n");
	}
});

// Listen on port 8888, IP defaults to 127.0.0.1
server.listen(8888);

