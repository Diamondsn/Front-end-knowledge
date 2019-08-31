function deepClone(obj){
    if(obj instanceof RegExp)return new RegExp(obj);
    if(obj instanceof Date)return new Date(obj);
    if(obj===null || typeof obj!=="object")return obj;
    
    let newobj=Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key]=typeof obj[key]?deepClone(obj[key]):obj[key];
        }
    }
    return newobj;
}

let testobj={
    a:{
        b:1,
        c:{
            d:2
        }
    }
};

console.log(deepClone(obj));