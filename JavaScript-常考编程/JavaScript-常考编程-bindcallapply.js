Function.prototype.bind=function(context){
   let self=this;
   return function(){
       return self.apply(context,arguments);
   }
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