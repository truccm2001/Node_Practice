const http = require('http')

const Server = http.createServer((req, res) => {
    console.log('user hit the server');
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Truc Ngo</h1>')
    res.end('statistic page');
})

Server.listen(4000);