var express = require('express');
var app = express();
app.use(express.json())

app.get("/myname", (req, res) => {
    res.json({"msg" : "Jofin"});
});

app.post("/myname", (req, res) => {
    res.json({"msg" : "Jofin post"});
});

app.post("/login", (req, res) => {
    let email = req['query']['email'];
    let pwd = req['query']['password'];
    
    if(email == 'jofinnsjeen@gmail.com' && pwd == 'admin'){
        res.json({"msg" : "you are correct"});
    } else {
        res.json({"msg" : "you are wrong"});
    }
});

app.post("/register", (req, res) => {
    let {name, email, password, address } = req.body;

    if(!name || !email || !password || !address){
        res.json({message: "Enter all the details"});
    } else {
        res.json({message: "Register successfull"})
    }
})

app.post("/add", (req, res) => {
    let {num1, num2} = req.body;
    if(!num1 || !num2){
        res.json({message: "Enter both the values"});
    } else {
        res.json({value : num1 + num2})
    }   
})

app.listen(8080, () => {
    console.log('server started')
})