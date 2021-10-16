function Middleware(){
  let started = false;
  this.start = function(flag){
    this.started = flag;
  }
}

const mw = new Middleware();
mw.start(true);
return mw;
