const fs=require("fs");

//write file
//synchromous path
fs.writeFileSync('./test.txt',"File systems");
//Asynchronous path
fs.writeFile('./test.txt',"Hello world",(err)=>{});


//READ file
//sync
const result=fs.readFileSync('./contact.txt',"UTF-8");
console.log(result)

//Async
fs.readFile('./contact.txt',"UTF-8",(err,result)=>{
 if(err){
    console.log("Error",err);
 }
 else{
    console.log(result);
 }   
});

//Append
//synchronous
fs.appendFileSync("./laval.txt",new Date().getDate().toString());

//copy
fs.cpSync("./test.txt","./copyy.txt");

//delete
//fs.unlink("./laval.txt");

//stats
console.log(fs.statSync("./test.txt"));
