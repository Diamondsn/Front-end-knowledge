function flat(arr){
    if(!Array.isArray(arr))return;
    let newArr=[];
    for(let value of arr){
       if(Array.isArray(value)){
           newArr.push(...flat(value));
       }else{
           newArr.push(value);
       }
    }
    return newArr;
}

console.log(flat([1,[2,3,4],[4,[5,6]]]));