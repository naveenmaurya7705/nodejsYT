const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

//builting a middleware
// console.log(__dirname)
 const staticPath = path.join(__dirname,'../public');
 app.use(express.static(staticPath));
const partialpath = (__dirname+'templates/partials');
console.log(partialpath);
const templatePath = (__dirname +'/templates/veiws');
console.log(templatePath);
//to see the views engine
// Corrected view engine configuration
app.set("view engine", "hbs"); // Corrected "veiw engin" to "view engine"
app.set("views", templatePath);
hbs.registerPartials(__dirname + '/templates/partials', function (err) {});

// template routes
app.get('/',(req,res) =>{
    res.render('index.hbs',{
        Myname: 'naveen' 
    });
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('*',(res,req)=>{
res.render('404 ',{
    errorcomment : "oops page could not found.",
});
});
// app.get(route,callback)
// app.get('/',(req,res)=>{
//    res.send("hello form the express")
// });

app.listen(8000,(err)=>{
    console.log("Express is running at port : 8000")
})
