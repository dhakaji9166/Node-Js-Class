

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const data = JSON.parse(fs.readFileSync('Data.json'));

const productes = data.products;


const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.end(data);
    if (req.url.startsWith('/product')) {
        console.log(req.url);
        const id = req.url.split('/')[2];
        const product = productes.find(p => p.id == (+id));
        console.log(product);
        res.setHeader('Content-Type', 'text/html');
        let modifiedIndex = index.replace('*title*', product.title)
            .replace('*url*', product.thumbnail)
            .replace('*price*', product.price)
            .replace('*rating*', product.rating)
            .replace('*description*', product.description);


        res.end(modifiedIndex);

        return;
    }


});


server.listen(8082);
