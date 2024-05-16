

const express = require('express');
const app = express();
const port = 3005;

let users = [{
    name : 'John',
    kidneys :[{
        healthy : false,
    }]

}];

app.use(express.json());

app.get('/',function(req,res){
   const johnKidneys  = users[0].kidneys;
   const numberOfkidneys  = johnKidneys.length;
   let numberOfhealthyKidneys = 0 ;

   for(let i =0 ; i<johnKidneys.length ; i++){
    if(johnKidneys[i].healthy){
        numberOfhealthyKidneys = numberOfhealthyKidneys + 1;
    }
   }

   const numberOfUnhealthyKidneys = numberOfkidneys- numberOfhealthyKidneys;

   res.json({
    numberOfkidneys,
    numberOfhealthyKidneys,
    numberOfUnhealthyKidneys
   })
});

app.post('/',function(req,res){
   console.log(req.body);
   const isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
    healthy : isHealthy
   })

   res.json({
    message : 'kidney added'
   });
});

app.put('/',function(req,res){
for(let i = 0 ; i <users[0].kidneys.length ; i++){

    users[0].kidneys[i].healthy = true;
}

res.json({
    message : 'all kidneys are healthy'
})

})

app.listen(port);