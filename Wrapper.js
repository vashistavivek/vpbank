function wrapper(oldFunction){
  return function(){
    const a = "Success";
    oldFunction(a);
  }
}
