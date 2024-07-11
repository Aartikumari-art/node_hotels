const mongoose = require('mongoose');

require('dotenv').config();
//difine mongodb connection

//const mongoURL = 'mongodb://localhost:27017/hotels'



const  mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);
 //set up mongoDB connection for local hosting

 //const mongoURL = 'mongodb+srv://HelloNode:HelloNode12345@cluster0.tionq7f.mongodb.net/'
  ////Global hosting of our database

 
  
  
  
  
  
// const uri = "mongodb+srv://HelloNode:HelloNode12345@cluster0.mongodb.net/menu?retryWrites=true&w=majority";

// mongoose.connect(uri)
// .then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB', err);
// });

 



 const db=mongoose.connection;
 //define event listener for database connetion

 db.on('connected',()=>{
    console.log('connected to mongoDB  server');
 });

 db.on('error',(err)=>{
    console.log(' mongoDB connection error',err);
 });
 db.on('disconnected',()=>{
    console.log(' mongodb disconnected ');
 });

 module.exports = db; 