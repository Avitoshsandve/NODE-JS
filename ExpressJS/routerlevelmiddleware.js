const express=require('express');
const router=express.Router();
const app=express();

router.use((req,res,next)=>{
    console.log("This is router level middleware");
    next();
});
router.get('/home',(req,res)=>{
    res.send("Welcome to home page")

});
router.get('/About',(req,res)=>{
    res.send("About us");
})
router.get('/contact',(req,res)=>{
    res.send("8149315672");
})
app.use('/api', router);
app.listen(3999,'localhost',()=>{
    console.log('server open on port 3999')
})



