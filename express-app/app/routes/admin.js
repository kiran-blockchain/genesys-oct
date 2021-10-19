const router = require('express').Router();

router.get("/",(req,res)=>{
    res.send("<h1>I am the default admn route</h1>")
});

module.exports = router;