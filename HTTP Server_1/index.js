
// const express = require('express');
// const app = express();

// const port = 4000;

// app.get('/',(req , res) =>{
//     res.send('Hello world lalchand');
// });

// app.listen(port);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;
// app.get('/', (req ,res) =>{
//     res.json({
//         name : 'lalchand',
//         age : 20,
//         gender :'male'
//     })
// });

app.get('/', (req , res) =>{
    res.send('Hello world lalchand');
})

app.listen(port);