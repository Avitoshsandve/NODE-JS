const express=require('express');
const love=express();

love.all('/secret',(req,res,next)=>{
    console.log("this has access to all files bu will not show the secret files");
    next;
});
love.listen(3503,'localhost',()=>{
    console.log("Let's keep going")


})