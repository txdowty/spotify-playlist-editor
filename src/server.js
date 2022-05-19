const http = require('http');
const app = require('./app');
const {port} = require('./config');

const server = http.createServer(app);

server.listen(port, function () {
    console.log('Server is listening on port ' + port);
});