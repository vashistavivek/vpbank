function getConstructor(...args) {
    function CName(...params) {
        this.action = function(){console.log("success");}
    }
    return new CName(...args);
}
