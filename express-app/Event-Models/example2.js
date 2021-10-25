const {createReadStream} = require('fs');

let chunkIndex =0 ;
const readStream = createReadStream('Event-Models/data.txt');

readStream.on('data',(info)=>{
    console.log("======================================"+chunkIndex+"=======================");
    ++chunkIndex;
    console.log(info.toString());
    console.log("\n");
})

readStream.on('end',()=>{
    console.log("Completed Reading");
});


readStream.on('open',()=>{
    console.log("Started Reading");
});