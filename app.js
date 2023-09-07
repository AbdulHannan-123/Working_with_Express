// const http = require('http');

const express = require('express'); 

const app = express();  // the above exress exports a funtion here, so we use it with app variable

app.use((req, res, next) => {  // it allow us ko add a middleware func
    console.log('In the middleware!');
    
    next(); // allow the request to continue to the next middleware in line
    res.send('<h1>Hello from express1!</h1>');
});  

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from express!</h1>');
}); 

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000); // this and above 2 lines do the same thing