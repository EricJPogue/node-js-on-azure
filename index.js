var http = require('http');
var url = require('url');
var dt = require('./datetime');


const server = http.createServer((request, response) => {
    console.log(request);
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World - EJP!!!");

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");
    response.write("Consider adding '/test?year=2017&month=July' to the URL.<br><br>");
    response.write("req.url="+request.url+"<br><br>");

    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.write("txt="+txt);


    response.end('<h3>Hello World!</h3>');

});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
