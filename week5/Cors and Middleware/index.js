const express = require("express")
const app = express();

function getMiddle(req, res, next){
    const method = req.method;
    const date = new Date().toISOString();
    const url = req.hostname;

    console.log(`${method} , ${date}, ${url}`);
    next();
}

app.use(getMiddle);

app.get("/sum", function(req, res){
    res.send("Hi There");
} )

app.listen(3001);
