const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/' && method === 'GET'){
        res.write('<html>')
        res.write('<h1>Hello World</h1>')
        res.write('<form method="POST" action="/create-user">')
        res.write('<input type="text" name="username" placeholder="username">')
        res.write('<button type="submit">Submit</button>')
        res.write('</form>')
        res.write('</html>')
        return res.end()
    } 
    if(url === '/users' && method === 'GET'){
        res.write('<html>')
        res.write('<h1>List Users</h1>')
        res.write('<ul>')
        res.write('<li>Riyan</li>')
        res.write('<li>Max</li>')
        res.write('<li>John</li>')
        res.write('</ul>')
        res.write('</html>')
        res.end()
    } 
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log(message)
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        });
    }
});

server.listen(3000);