function danli(){
    let obj;
    return (function(){
        if(!obj){
            obj={test:"1"};
        }
        return obj;
    })();
}

console.log(danli());