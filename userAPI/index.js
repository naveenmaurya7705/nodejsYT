const http = require ('http');
const fs =require('fs');
 const data= fs.readFileSync(`${__dirname}/userapi.json`,"utf-8");
    const objData = JSON.parse(data);
    console.log(objData);
const server  = http.createServer((req,res) =>{
    console.log(req.url);
  if(req.url=='/'){
    res.end("<h1>you are in home pagee</h1>");
  }
  else if(req.url=='/user'){
    res.end("<h1>you are in User data pagee</h1>")
  }
  else if(req.url =='/userdata'){
    res.writeHead(200,{"content-type" :" text/json"});
res.end(objData[5].name);
  }
   
    
  
  else{
    res.writeHead(404,{"content-type" :" text/html"});
    res.end("<h1>page does not exist.</h1>")
  }
} );

server.listen(8080,(err)=>{
    console.log('server in listening at port no : 8080');
});