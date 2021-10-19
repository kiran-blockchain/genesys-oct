const express = require('express');
const router =express.Router();
const app = express();
const user = require("./app/routes/user");
//step 3
app.use("/user", user);

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('App running in port 5000');
    }
});
