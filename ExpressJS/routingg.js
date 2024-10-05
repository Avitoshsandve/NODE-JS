//Basic routing eample
const express=require('express');
const expi=express();
expi.get('/',(req,res)=>{
    res.send('Hello webd geeks');
})
expi.listen(4501,'localhost',()=>{
    console.log("This is basic routing model")
})
