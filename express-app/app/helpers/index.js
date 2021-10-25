const checkLegalAge =(age)=>{
  if(isNaN(age)){
    return {message:"Enter Valid Age",status:false};
  }
  else if(age<18){
       return {message:"You are below 18 and cannot use our app",status:false};
  } else{
      return {message:"Valid age",status:true}
  }
}

module.exports ={
    checkLegalAge
}