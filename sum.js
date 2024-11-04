const express= require ("express");
const cors = require ("cors");

const app = express();

app.use(cors({domain: "http://localhost:3000/"}))
app.use(express.json());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

res.json({
    answer: a + b
})
})

app.listen(3001);