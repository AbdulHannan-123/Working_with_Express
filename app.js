const http = require('http');
const routes = require('./routes')


// function rqListener(req , res) {
    
// }

cons server = http.createServer(routes.handler);

server.listen(3000);