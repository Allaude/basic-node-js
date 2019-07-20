const http = require('http');
const routing = require('./2. routing')

const server = http.createServer(routing.handle);

server.listen(5000);