const http=require('http');
const fs=require('fs');

const Aviserver=http.createServer((req,res)=>{
    const log=`${Date.now()}: New Request Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello web developers keep coding")

    })



});

Aviserver.listen(8006,'localhost',()=>{
    console.log("Sevrer working")

})


