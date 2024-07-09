const mongoose = require('mongoose');
//difine mongodb connection

const mongoURL = 'mongodb://localhost:27017/hotels'
 //set up mongoDB connection
  mongoose.connect(mongoURL);

 const db=mongoose.connection;
 //define event listener for database connetion

 db.on('connected',()=>{
    console.log('connected to mongoDB to server');
 });

 db.on('error',(err)=>{
    console.log(' mongoDB connection error',err);
 });
 db.on('disconnected',()=>{
    console.log(' mongodb disconnected ');
 });

 module.exports = db; 