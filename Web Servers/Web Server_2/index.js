
const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf8');
const data = JSON.parse(fs.readFileSync('Data.json'));
const product = data.products[0];

const server = http.createServer((req, res) => {
    console.log("Server Started");
    console.log(req.url);

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/Api':
            res.setHeader('Content-Type', 'Application/Json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
          const updateIndex =   index.replace('**title**', product.title).replace('**img**', product.thumbnail).replace('**price**',product.price).replace('**rating**', product.rating).replace('**description**',product.description)
            res.end(updateIndex);

            break;
        default:
            res.writeHead(404);
            res.end();


    }



    // res.end(index)

});

server.listen(8081);
