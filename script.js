const express = require("express");
const app = express();


app.listen(3001);

app.get('/sum/:a/:b', function (req, res){
    const a = Number(req.params.a); 
    const b = Number(req.params.b);

    res.send(`Sum of Your Entries is ${a+b}`)
})
app.get('/multiply/:a/:b', function (req, res){
    const a = Number(req.params.a); 
    const b = Number(req.params.b);

    res.send(`Mul of Your Entries is ${a*b}`)
})
app.get('/sub/:a/:b', function (req, res){
    const a = parseInt(req.params.a); 
    const b = parseInt(req.params.b);

    res.send(`Sub of Your Entries is ${a-b}`)
})
app.get('/div/:a/:b', function (req, res){
    const a = Number(req.params.a); 
    const b = Number(req.params.b);
    if(b === 0){
        res.send(`Oh no cannot divide by ${b}`);
    }else

    res.send(`div of Your Entries is ${a/b}`)
})