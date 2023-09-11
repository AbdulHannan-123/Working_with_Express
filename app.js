const express = require('express'); 
const bodyParse = require('body-parser')

const app = express();  // the above exress exports a funtion here, so we use it with app variable 

app.use(bodyParse.urlencoded({extendedfasle})); // only parse body getting from the form  like in our case



app.use("/add-products",(req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type= "submit">Add product</button></form>');
}); 

app.use("/product",(req, res) => {
    console.log(req.body);
    res.redirect("/");
});
app.use("/",(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from express/</h1>');
}); 

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000); // this and above 2 lines do the same thing