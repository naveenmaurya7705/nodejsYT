//Acuire library
const express = require('express');
const port =5000;
const path = require('path');

const app = express();

//setting the absolute path
const staticPath = path.join(__dirname,'../todolist');

//just for test
console.log(staticPath);

//builting a middleware
app.use(express.static(staticPath));

//sending request and setup the route
app.get('/',(req,res)=>{
 res.send('<h1>hello welcome in our page</h1>');
});

//server listing
app.listen(port,(err)=>{
    console.log(`express server is runing at port no : ${port}`);
})