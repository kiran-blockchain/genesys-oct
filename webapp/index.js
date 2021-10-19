const http = require('http');
const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const app = http.createServer((req,res)=>{
    if(req.url=="/"){
        console.log(__dirname);
        fs.readFile(__dirname+"/index.html",(err,result)=>{
            if(err){
                console.log(err);
                res.writeHead(404,"file not found");
                res.write("<h1>File Not Found</h1>");
                res.end();
            }
            else{
                res.writeHead(200,"Successssss");
                res.write(result.toString());
                res.end();
            }
        })
        // res.write("<h1>Hello World</h1>");
        //res.end();
    }
    if(req.url=="/contact"){
        res.write("<h1>Wecome to genesys</h1>");
        res.end();
    }
});

app.listen("3000",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running");
    }
})

