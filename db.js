
// require('dotenv').config();
// const mongoose = require('mongoose');
//difine mongodb connection

//const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = process.env.MONGODB_URL;

//mongodb+srv://HelloNode:HelloNode12345@cluster0.tionq7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const  mongoURL = process.env.ATLASH_DB;

// mongoose.connect(mongoURL);






// MongoDB connection string
//  

require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.ATLASH_DB;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true // For development only
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;

















 

module.exports = mongoose.connection;