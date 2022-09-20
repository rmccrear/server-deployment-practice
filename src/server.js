require('dotenv').config()

const express = require("express");
const farmRoutes = require("./farmRoutes");


const app = express();
app.use("/api/v1/farms",farmRoutes );


app.set('views', './src/views');
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    return res.render("index", {title: "Farms in New Taipei City"});
});

module.exports = app;

