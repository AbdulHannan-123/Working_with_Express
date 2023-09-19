const path = require('path');
const express = require('express');

const router = express.Router();
/// this path becoms /admin/add-prodcts
router.get("/add-products",(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type= "submit">Add product</button></form>');
}); 
/// this pah become /admin/product
router.post("/product",(req, res) => {
    console.log(req.body);
    res.redirect("/");
});


module.exports= router;