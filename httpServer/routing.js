const http = require( 'http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
if( req.url=="/"){
    res.end(`<h1>you are in ${req.url} page.</h1>`);
}
else if( req.url=="/profile"){
    res.end(`<h1>you are in ${req.url} page.</h1>`);
}
else if( req.url=="/contact"){
    res.end(`<h1>you are in ${req.url} page.</h1>`);
}
else if( req.url=="/product"){
    res.end(`<h1>you are in ${req.url} page.</h1>`);
}
else if( req.url=="/price"){
    res.end(`<h1>you are in ${req.url} page.</h1>`);
}
else{
    res.writeHead(404,{"contet-type":"text/html"});
    res.end("<h1>page does not exist.</h1>");
}
});

server.listen(7000,"127.0.0.1",(err)=>{
    console.log("server is listening at port : 7000");
});