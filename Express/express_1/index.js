

const fs = require('fs');
const index = fs.readFileSync('index.html','utf8');
const data = JSON.parse(fs.readFileSync('Data.json', 'utf8'));

const product = data.products;

const express =  require('express');
const { type } = require('os');

const app = express();

// Api - Endpoint - Route

app.get("/",(req,res)=>{
    res.json({type : 'Get'})
});

app.post("/",(req,res)=>{
    res.json({type : 'POST'})
});

app.put("/",(req,res)=>{
    res.json({type : 'PUT'})
});

app.delete("/",(req,res)=>{
    res.json({type : 'DELETE'})
});

app.patch("/",(req ,res)=>{
    res.json({type : "PATCH"})
});











// four way to send response in express

app.get('/demo',(req,res) =>{
    // res.send("Hello Wolrd");
    // res.sendFile('./index.html');
    // res.json(product)
    res.sendStatus(404)

})

app.listen(8085, ()=>{
    console.log('Server Started');
});
