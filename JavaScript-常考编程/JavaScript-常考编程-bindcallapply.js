Function.prototype.bind=function(context){
   let self=this;
   return function(){
       return self.apply(context,arguments);
   }
}

Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;

}


Function.prototype.call=function(){
    let [thisArg,...args]=arguments;
   if(!thisArg){
       thisArg=typeof window==="object"?window:globalThis;
   }
   thisArg.func=this;
   let result=thisArg.func(...args);
   delete thisArg.func;
   return result;
}

Function.prototype.apply=function(){
    let [thisArg,args]=arguments;
   if(!thisArg){
       thisArg=typeof window==="object"?window:globalThis;
   }
   thisArg.func=this;
   let result=thisArg.func(...args);
   delete thisArg.func;
   return result;
}

function test(){
    console.log(this.name);
    console.log(arguments);
}

console.log(test.bind({name:"ok1"})(1,2,3));
console.log(test.call({name:"ok2"},1,2,3));
console.log(test.apply({name:"ok3"},[1,2,3]));