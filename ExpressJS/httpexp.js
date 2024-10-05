const http=require('http');
const tastyy
=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Hii welcome to http server</h1>');

    }
    else if(req.url==='/about'){
        res.statusCode=300;
        res.end('<h1>THis is just to compare working with express</h1>');


    }
    else{
        res.setcode=404;
        res.end('Bad Gateway');

    }
});
tastyy.listen(3663,'localhost',()=>{
    console.log('This sever is http and running on port 3663');
});
