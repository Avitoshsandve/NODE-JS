const express=require('express');
const laval=express();
laval.get('/',(req,res)=>{
    res.send('<h1>Hello peps lets see express server</h1>');
});
laval.get('/about',(req,res)=>{
    res.send('<h1>i am just comparing http and express</h1>');
});
laval.use((req,res)=>{
    res.status(404).send('<h1>404:BAD GATEWAY');
});
laval.listen(3454,'localhost',()=>{
    console.log('Express server is running on port 3454');
});
