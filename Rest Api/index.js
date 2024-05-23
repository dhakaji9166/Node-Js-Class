
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("Data.json"));
const products = data.products;


const express = require("express");
const app = express();

app.use(express.json());

//api api root 

//Read Get /Products
app.get('/products', (req, res) => {
    // res.send(index);
    res.json(products);

});


//Read Get /products/:id   C R U D 

app.get('/products/:id', (req, res) => {

    const id = +req.params.id;
    console.log(id)
    const product = products.find(p => p.id === id);

    res.json(product);

});


//  post method 

app.post("/product", (req, res) => {
    console.log(req.body)
    res.json({ type: ' POST' });
});

// PUT methode 

app.put("/products/:id", (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json();
});

// PATCH methode 
app.patch("/products/:id", (req, res) => {
    const id = +req.params.id;
    console.log(id);
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.status(200).json();
});


// Delete Method 
app.delete("/products/:id", (req, res) => {
    const id = +req.params.id;
    console.log(id);
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(204).json(product);
});

app.listen(8080, () => {
    console.log("server is started ")
});