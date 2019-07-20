const http = require('http')

const server = http.createServer((req, res) => {
    console.log('running server on port 4050');
    //shutdown server
    // req.url is to get url on address user typed
    // req.method is to get what method used by client
    // req.headers is to get all information header from client
    //console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end() // after you declare end method you cannot write program anymore
    //res.write('nanana')
    //process.exit(); // this code for terminate/close a program
});
server.listen(4050);