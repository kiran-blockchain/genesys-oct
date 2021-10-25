//step 1
const defaultRoute = (req,res)=>{
    res.send("<h1>I am the default admn route</h1>")
};
const login =(req,res)=>{
    res.send("<h1>I am the Login</h1>")
};
const register =(req,res)=>{
    res.send("<h1>I am the Register</h1>")
};
const authenticate = (req,res,next)=>{
    if(req.body.username=="kiran" && req.body.password=='1234'){
        req.body.isAuthenticated=true;
        next();
    }else{
        res.send("<h1>You are not authetnicated.</h1>")
    }
}

const getProfile = (req,res)=>{
    if(req.body.isAuthenticated){
    //your database logic goes here
    res.json({
        username:"Kiran",
        age:30,
        gender:"M"
    });
}
else{
    res.json({status:"User Not Authenticated"})
}
    
}
module.exports ={
    defaultRoute,
    login,
    register,
    authenticate,
    getProfile
}