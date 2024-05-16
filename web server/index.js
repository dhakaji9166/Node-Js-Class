

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = fs.readFileSync('Data.json','utf-8');

// const data = { age: 5 };


const server = http.createServer((req, res) => {
    console.log('server started');
    res.setHeader('Dummy', 'DummyValue');
    res.setHeader('Content-Type', 'application json')

    // res.end(data);
    res.end(index);
    // res.end(JSON.stringify(data));
});

server.listen(8080);