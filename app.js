const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// route link 
const productRoute = require('./routes/product.route');

// middleware 
app.use(express.json());
app.use(cors());
app.use('/api/v1/product', productRoute)
// schema design 



app.get("/", (req, res)=>{
    res.send("Route is Working YaY");
})


module.exports = app;