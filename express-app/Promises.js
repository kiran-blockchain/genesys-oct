
const promise = new Promise((resolve,reject)=>{
    console.log("I am inside the promise")
    if(true){
        resolve("I am good");
    }
    else{
        reject("The is some issue");
    }
})

promise.then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})
console.log("I am good")