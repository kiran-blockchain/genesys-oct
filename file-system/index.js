//Working with files
const  fileSystem = require('fs');

//Create a file
//fileSystem.writeFileSync("./demo.txt","Welcome to Genesys");

//let appendData = fileSystem.appendFileSync("./demo.txt","\n I am the Foruth Line");
//Asynchronous way of creating a file

//Call back approach
// fileSystem.writeFile("./demo2.txt","I am Async",(err,result)=>{
//     if(err){
//         console.log("Error in creating the file");
//     }
//     else{
//         console.log("File Create Successfully");
//     }
// })

// fileSystem.readFile("./demo2.txt",(err,result)=>{
//         if(err){
//             console.log("Error in reading the file");
//         }
//         else{
//             console.log(result.toString());
//         }
//     });

fileSystem.mkdir("newdir",(err,result)=>{
    if(err){
                    console.log(err);
                }
                else{
                    console.log("Directory Created");
                }
})