const express=require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');

const items =require('./routes/api/items');

const app=express();

//bosyparser Middleware
app.use(bodyParser.json());

//DB config
const db= require('./config/keys').mongoURI;

//connect to Mongo
 mongoose
 .connect(db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
 .then(()=>{console.log('MONGODB Connected.....')})
 .catch(err => console.log('err'));

 
app.use('/api/items',items);
 const port =process.env.PORT || 5000;
 
 app.listen(port, ()=>{ console.log('Server started')});