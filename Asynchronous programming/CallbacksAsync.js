const fs=require("fs");
fs.readFile('./callbackasync.txt',"utf-8",(err,data)=>{
    if(err){
        console.error("Error in file:",err);
        return;
    }
    else{
        console.log("File Content: ",data);
    }
})
console.log("The message is printed before file content as readfile is async")