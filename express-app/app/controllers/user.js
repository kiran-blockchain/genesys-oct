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
module.exports ={
    defaultRoute,
    login,
    register
}