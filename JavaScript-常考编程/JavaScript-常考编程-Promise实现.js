// 参考链接https://mp.weixin.qq.com/s/IZL76KNNf9w07y-Yue106w
class MyPromise {
    constructor(fn) {
        this.value = undefined;
        this.reason = undefined;
        this.state = 'PENDING';
        this.resolveFuncs = [];
        this.rejectFuncs = [];

        const resolveFunc = (value) => {
            setTimeout(() => {
                this.value = value;
                this.state = "FULFILLED";
                this.resolveFuncs.forEach(({ fn, resolve: res, reject: rej }) => res(fn(value)))
            })
        }

        const rejectFunc = (e) => {
            setTimeout(() => {
                this.reason = e;
                this.state = "REJECTED";
                this.rejectFuncs.forEach(({ fn, resolve: res, reject: rej }) => rej(fn(e)))
            })
        }
        fn(resolveFunc, rejectFunc);
    }

    static resolve(obj){
      if(obj && obj.then){
          return obj;
      }
      return new MyPromise(resolve=>resolve(obj));
    }

    then(fn) {
      if(this.state=="FULFILLED"){
          const result=fn(this.value);
          return MyPromise.resolve(result);
      }
      if(this.state=="PENDING"){
          return new MyPromise((resolve,reject)=>{
              this.resolveFuncs.push({fn,resolve,reject});
          })
      }
    }

    catch(fn){
        if(this.state=="REJECTED"){
            const result=fn(this.value);
            return MyPromise.resolve(result);
        }
        if(this.state=="PENDING"){
            return new MyPromise((resolve,reject)=>{
                this.rejectFuncs.push({fn,resolve,reject});
            })
        }
    }
}

// 测试
MyPromise.resolve(10).then(o=>o*10).then(o=>o+10).then(d=>{
    console.log(d);
});
new MyPromise((resolve,reject)=>reject('Error')).catch(e=>{
    console.log(e);
});