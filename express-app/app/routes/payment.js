const router = require('express').Router();

router.get("/",(req,res)=>{
    res.send("<h1>I am the default Payment</h1>")
});

module.exports = router;