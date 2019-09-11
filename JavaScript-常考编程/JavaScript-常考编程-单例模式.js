function danli(){
    let obj;
    return (function(){
        if(!obj){
            obj={test:"1"};
        }
        return obj;
    })();
}

var GetSingle=(function(){
    var instance;
    return function (){
        if(!instance){
            this.a = 'Hello World'
            instance = this;
        }
        return instance;
    }
})();

console.log(danli());