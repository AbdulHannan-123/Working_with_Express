const express = require('express'); 
const bodyParse = require('body-parser')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();  // the above exress exports a funtion here, so we use it with app variable 

app.use(bodyParse.urlencoded({extended: false})); // only parse body getting from the form  like in our case

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000); // this and above 2 lines do the same thing