function unique1(arr){
    return [...new Set(arr)];
}

function unique2(arr){
    let newarr=[];
    for(let i=0;i<arr.length;++i){
        if(newarr.indexOf(arr[i])<0){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

function unique3(arr){
   let newarr=[];
   let hashmap={};
   for(let value of arr){
       if(!hashmap[value]){
           newarr.push(value);
           hashmap[value]=1;
       }
   }
   return newarr;
}

let arr=[1,2,3,3,1,6,5];
console.log(unique1(arr));
console.log(unique2(arr));
console.log(unique3(arr));