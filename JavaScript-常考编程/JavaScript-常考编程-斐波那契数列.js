function test (n) {
    if(n<=1) return 1
    else return test(n-1) + test(n-2)
 }

 function test1 (n) {
   let a=0,b=1;
   for(let i=1;i<=n;++i){
       [a,b]=[b,a+b];
   }
   return b;
 }

 console.log(test(5));
 console.log(test1(5));

 console.log(test(10));
 console.log(test1(10));

 // console.log(test(100));
 console.log(test1(100));