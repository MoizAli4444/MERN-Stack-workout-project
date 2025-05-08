const express = require('express');

require('dotenv').config();

// express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/',(req,res)=>{
    res.json({msg:'welcome to workout project'});
});

// listen for requests
app.listen(process.env.PORT,()=>{
    console.log('app run on :',process.env.PORT);
});