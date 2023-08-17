const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.send(`we are in our ${req.url} page`);
});

app.get('/product ',(req,res)=>{
    console.log(`we are in our ${req.url} page`);
    res.send(`we are in our ${req.url} page`);
});
  
app.get('/profile',(req,res)=>{
    console.log(`we are in our ${req.url} page`);
    res.send(`we are in our ${req.url} page`);
 });

 app.get('/user',(req,res)=>{
    console.log(`we are in our ${req.url} page`);
    res.send(`we are in our ${req.url} page`);
});
app.get('/contact',(req,res)=>{
    console.log(`we are in our ${req.url} page`);
    res.status(200).send(`we are in our ${req.url} page`);
});
app.listen(3000,(err)=>{
    console.log(`server is running at port : 3000`)
})