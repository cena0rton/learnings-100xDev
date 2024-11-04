const express = require ("express");
const cors = require ("cors");
const jwt = require("jsonwebtoken");
const app = express();


const JWT_SECRET = "asLHADSKBFDKJDA";

app.use(express.json());
app.use(cors());

const user = [];



app.post("/signup", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    user.push(
        {
            username: username,
            password: password
        }
    )

    res.json({
        message: "you are signed Up"
    })

})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;

    for (let i = 0; i< user.length; i++){
        if (user[i].username == username && user[i].password == password){
        
           foundUser = user[i];
    
      }
    }

    if (foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET) //CONVERT username to jwt
        // foundUser.token = token;
        res.json({
            token: token
        })
    }else{
        res.status(404).send({
            message: "Wrong Credentials"
        })
    }

        
    
})

app.get("/me", function(req, res){
    const token = req.headers.token; //jwt  
    const decoded = jwt.verify(token ,JWT_SECRET);// returns the same json so we comapre the username now instead of token top get the password
    console.log(decoded);
    const username = decoded.username;
    let foundUser = null;
// need to get password from database or here in memory storage
    for (let i = 0; i< user.length; i++){

        if(user[i].username == username){
            foundUser = user[i];
        }
    }

    if (foundUser){
        res.json({
            name: foundUser.username,
            password: foundUser.password

        })
    }else{
        res.send("Invalid user")
    }
        
    
})

app.listen(3001);