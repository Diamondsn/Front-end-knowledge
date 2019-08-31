function _new(Func,...args){
    let newobj={};
    newobj.__proto__=Func.prototype;
    let res=Func.apply(newobj,args);
    if(typeof res=="object"){
        newobj=res;
    }
    return newobj;
}

function Person(name,age){
    this.name=name;
    this.age=age;
}

console.log(_new(Person,"ok",123));