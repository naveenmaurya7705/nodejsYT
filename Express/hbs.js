//Acuire library
const express = require('express');
const port = '5000';
// const path = require('path');

const app = express();

// //setting the absolute path
// // const staticPath = path.join(__dirname,'../todolist');
// const templatePath = path.join(__dirname,'../express/templates/partials')
// //to set the view engine
// app.set('view engine', 'hbs');
// //just for test
// console.log(templatePath);
// //for modifling the views folder
// app.set("views",templatePath)

// //builting a middleware
//  app.use(express.static(staticPath));

// //template engine route
// app.get('/',(req,res)=>{
//     res.render('index.hbs');
// })

// app.get('/about',(req,res)=>{
// res.render('about')
// });

//sending request and setup the route
app.get('/',(req,res)=>{
    res.send('<h1>hello welcome in our page</h1>');
});

app.use('/',require('./routes'));
//server listing
app.listen(port,(err)=>{
    console.log(`express server is runing at port no : ${port}`);
})