const express=require('express');
const appy=express();

const appliMiddleware=(req,res,next)=>{
    console.log(`${new Date()}===Request [${req.method}] [${req.url}]`);
    next();
}
appy.use(appliMiddleware);

appy.listen(4506,'localhost',()=>{
    console.log('This is appllication level middleware example')
})