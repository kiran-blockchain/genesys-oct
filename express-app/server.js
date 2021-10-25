const express = require('express');
const router =express.Router();
const app = express();
const user = require("./app/routes/user");
const lookup = require("./app/routes/lookup")
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//step 3
app.use("/user", user);
app.use("/lookup", lookup);
console.log(process.env.ENVIRONMENT)
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        
        console.log('App running in port ' + process.env.PORT);
    }
});
