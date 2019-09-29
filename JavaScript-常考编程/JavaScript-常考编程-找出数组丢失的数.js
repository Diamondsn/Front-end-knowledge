function findLost1(arr,n){
    var sum=0;
    var sum1=0;
    for(var i=0;i<arr.length;++i){
        sum+=arr[i];
        sum1+=(i+1);
    }
    return sum1+n-sum;
}

function findLost2(arr,n){
    var res=0;
    for(var i=0;i<arr.length;++i){
        res^=arr[i];
    }
    for(var i=0;i<n;++i){
        res^=(i+1);
    }
    return res;
}
console.log(findLost1([1,2,3,4],5));
console.log(findLost2([1,2,3,4],5));