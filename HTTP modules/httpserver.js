const http=require('http');
 const aviserve=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write("Hello gunjan");
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.write("Invalid");
    }
 });
 aviserve.listen(8080,'localhost',()=>{
    console.log(`Server is running on http://localhost:8080`);
 });
