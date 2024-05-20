
const fs = require('fs');
// const index  =fs.readFileSync('index.html','utf8');
// const data = JSON.parse(fs.readFileSync('Data.json' ,'utf8'));

// const product  =data.products;

const express = require('express');
const path = require('path');
// const { type } = require('os');
const app = express();
const morgan  = require('morgan')


app.use(morgan('dev'));
app.use(morgan('default'))
// body Parser 

// app.use(express.json());
// app.use(express.urlencoded());  //it is use in form for send the data;

app.use(express.static('Public'));

// app.use((req,res,next) =>{
//     console.log(req.method ,req.ip,req.hostname , new Date() ,req.get('User-Agent'));

//     next();

// });

const auth = (req, res, next) => {
    // console.log(body.query);

    if (req.body.password == '123') {
        next();
    } else {
        res.sendStatus(401);
    }

}

// app.use(auth);   //this is use for all the page 

app.get("/product/:id" , (req, res) => {
    // res.json({ type: 'POST' });
    res.send("Hello World");
    console.log(req.params);
});

app.post("/",auth , (req, res) => {
    // res.json({ type: 'POST' });
    res.send("Hello World")
});

app.listen(8080, () => {
    console.log('server is started on port 8080')
});


