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





class promise {
	constructor(excutor) {
		this.state = 'pending';
		this.result = undefined;
		this.reason = undefined;
		this.resolveStack = [];
		this.rejectStack = [];

		let resolve = result => {
			if(this.state === 'pending') {
				this.result = result;
				this.resolveStack.forEach(fn => fn());
				this.state = 'fulfilled';
			}
		}

		let reject = result => {
			if(this.state === 'pending') {
				this.reason = result;
				this.rejectStack.forEach(fn => fn());
				this.state = 'rejected';
			}
		}

		try {
			excutor(resolve, reject)
		} catch(err) {
			reject(err)
		}

	}

	then(onFulfilled,onRejected) {

		let promise2 = new promise((resolve,reject) => {
			if(this.state === 'fulfilled') {
				let x = onFulfilled(this.result);
				resolvePromise(promise2, x, resolve, reject);
			}
			if(this.state === 'rejected') {
				let x = onRejected(this.reason);
				resolvePromise(promise2, x, resolve, reject);
			}
			if(this.state === 'pending') {
				this.resolveStack.push(() => {
					let x = onFulfilled(this.result);
					resolvePromise(promise2, x, resolve, reject);
				})
				this.rejectStack.forEach(() => {
					let x = onRejected(this.reason);
					resolvePromise(promise2, x, resolve, reject);
				})
			}
		})

		return promise2
	}

}





//有异步的Promise
class promise {
	constructor(excutor) {
		this.state = 'pending';
		this.result = undefined;
		this.reason = undefined;
		this.resolveStack = [];
		this.rejectStack = [];

		let resolve = result => {
			if(this.state === 'pending') {
				this.result = result;
				this.resolveStack.forEach(fn => fn());
				this.state = 'fulfilled';
			}
		}

		let reject = result => {
			if(this.state === 'pending') {
				this.reason = result;
				this.rejectStack.forEach(fn => fn());
				this.state = 'rejected';
			}
		}

		try {
			excutor(resolve, reject)
		} catch(err) {
			reject(err)
		}

	}

	then(onFulfilled,onRejected) {
		// onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
		// onRejected如果不是函数，就忽略onRejected，直接扔出错误
		onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

		let promise2 = new promise((resolve,reject) => {
			if(this.state === 'fulfilled') {
  				// 保证是异步，若执行有错误则进行报错
				setTimeout(() => {
					try {
						let x = onFulfilled(this.result);
						resolvePromise(promise2, x, resolve, reject);
					} catch(err) {
						reject(err)
					}
				}, 0);
			}
			if(this.state === 'rejected') {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch(err) {
						reject(err);
					}
				}, 0);
			}
			if(this.state === 'pending') {
				this.resolveStack.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.result);
							resolvePromise(promise2, x, resolve, reject);
						} catch(err) {
							reject(err);
						}
					}, 0);
				})
				this.rejectStack.forEach(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch(err) {
							reject(err);
						}
					}, 0);
				})
			}
		})

		return promise2
	}

}