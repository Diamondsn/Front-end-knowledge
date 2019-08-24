Promise.race = function (args) {
    if (!Array.isArray(args))
        return;
    return new Promise((resolve, reject) => {
        args.forEach((item,index) => {
            item.then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    });
}
// 测试
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),10000);
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(2),1000);
})
Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})