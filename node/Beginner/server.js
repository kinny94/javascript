const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(5000, () => {
    console.log('server is running at port 5000');
});