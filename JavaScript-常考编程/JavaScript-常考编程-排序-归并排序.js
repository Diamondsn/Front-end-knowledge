function mergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }else{
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
    }

    function merge(left,right){
       let newarr=[];
       while(left.length&&right.length){
           if(left[0]<=right[0]){
               newarr.push(left.shift());
           }else{
               newarr.push(right.shift());
           }
       }
       return [...newarr,...left,...right];
    }

    
}

console.log(mergeSort([1,2,3,4,9,8,7,6]));