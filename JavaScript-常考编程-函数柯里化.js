function curry(fn,...args){
    return args.length<fn.length
    ?(...otherArgs)=>curry(fn,...args,...otherArgs)
    :fn(...args);
}

// 测试
function sum(a,b,c){
    console.log(a+b+c);
}

curry(sum)(1,2,3);
curry(sum)(1)(2)(3);
curry(sum)(1,2)(3);

// 函数柯里化的主要作用：
// 参数复用。
// 提前返回 – 返回接受余下的参数且返回结果的新函数。
// 延迟执行 – 返回新函数，等待执行。