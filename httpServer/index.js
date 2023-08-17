//creating a http server

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
  res.end('hello from the sever side');
});

server.listen(8000,"127.0.0.1",(err)=>{
 console.log("server is listening at port : 8000");
});