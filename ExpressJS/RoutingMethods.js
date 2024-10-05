const express=require('express');
const appsy=express();

appsy.get('/',(req,res)=>{
    res.send('GET request at homepage');
})
 appsy.post('/',(req,res)=>{
    res.send('POST request at homepage')
 })
 appsy.listen(3502,'localhost',()=>{
    console.log("There are two methods post and get");
 });