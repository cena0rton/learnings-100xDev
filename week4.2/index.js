const express = require("express");
const app = new express();
const path = require('path');


app.get('/pawan', function (req, res){
    res.sendFile(path.join(__dirname,'index.html'));
    
})




app.listen(3000);



