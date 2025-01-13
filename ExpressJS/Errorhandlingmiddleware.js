const express=require('express');
const app=express();

const errhandle=(err,req,res,next)=>{
    console.error(err.stack)
    res.status(440).send('Server error')

}
app.get('/', (req, res) => {
    throw new Error('This is a test error');
});
app.use(errhandle);

app.listen(5670,'localhost',()=>{
    console.log('server started')
})
