const express=require('express');
const app=express();

app.use(express.static('public'))
app.listen(6979,'localhost',()=>{
    console.log('server for static in builtin started');
}) 