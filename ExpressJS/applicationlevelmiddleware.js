const express=require('express');
const appy=express();

appy.use('/',(req,res,next)=>{
    console.log('Time: ',Date.now())
    next();
})

appy.listen(4506,'localhost',()=>{
    console.log('This is appllication level middleware example')
})