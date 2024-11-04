const express = require("express");
const app = express();

function middleware(req, res, next){
    const a = req.query.a;
    if (a <= 14){
        res.status(411).json({msg:"Sorry yoou dont thave access"})
    }else{
        next();
    }
}

app.get('/a',middleware , function (req, res){
    res.json({msg: "you have sucessfuly rideen the ride one"});
})

app.listen(3002);
