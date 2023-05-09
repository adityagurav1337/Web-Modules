var http = require("http");
var fs = require("fs");
var ulr = require("url");
    http.createServer((req, res)=>{

var pathname = req.url;

 if(pathname == "/"){
    res.write(fs.readFileSync("index.html").toString());

 }
 else if (pathname == "/about"){
    res.write(fs.readFileSync("about.html").toString())
 }

 else{
    res.write(fs.readFileSync("pnf.html").toString())
 }

        res.end();

         


    }).listen(8081);