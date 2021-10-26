// getting-started.js
const mongoose = require('mongoose');
const { mongodb } = require('./config/dbconnection');

main().then(result=>{
    console.log("successfully conected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongodb);
}