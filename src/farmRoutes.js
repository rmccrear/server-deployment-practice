const {getFarms} = require("./data");
const farms = require('express').Router();

farms.get("/organic", async function(req, res){
    const farmData = await getFarms();
    for(var f of farmData){
        f.googleLink = `https://www.google.com/maps/place/台灣${f.Address}`;
    }
    res.json(farmData);
})


module.exports = farms;
