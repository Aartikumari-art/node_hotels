// const objectToConvert={
//     name:"Alice",
//     age:25
// };
// const json=JSON.stringify(objectToConvert);//Convert object to JSON string
// console.log(typeof json);


const express=require('express')
const app=express();
const db = require('./db');
require('dotenv').config();



 const bodyParser = require('body-parser'); 
 app.use(bodyParser.json());//req.body-parser

 
const PORT = process.env.PORT ||3007;

 

app.get('/',function(req,res){

    res.send('Welcome to our Hotels .......');
    // let ary = [];
    // for(let i=1;i<=10;i++)
    // {
    //     ary.push(i)
    // }
    // res.send(ary.join(','));
})









//Import  the router files

const personRoutes= require('./routes/personRoutes');
const menuItemRoutes  = require('./routes/menuItemRoutes');
//use the router
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);





 


app.listen(3007,()=>{
    console.log('listening on port 3007');
})






