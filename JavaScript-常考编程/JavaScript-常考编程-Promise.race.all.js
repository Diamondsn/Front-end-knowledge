//resolve方法
promise.resolve = function(val){
    return new Promise((resolve,reject)=>{
      resolve(val)
    });
  }
  //reject方法
  promise.reject = function(val){
    return new Promise((resolve,reject)=>{
      reject(val)
    });
  }
  //race方法 谁先成功则返回谁
  promise.race = function(promises){
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(resolve,reject)
      };
    })
  }
  //all方法(获取所有的promise，都执行then，把结果放到数组，一起返回，失败则直接返回第一个失败的值)
  promise.all = function(promises) {
      let arr = [];
      function processData(index, data) {
          arr[index] = data;
          if(index === promises.length - 1) {
              resolve(arr);
          }
      }
      return new promise((resolve,reject) => {
          for (let index = 0; index < promises.length; index++) {
              promises[index].then(data => {
                  processData(index,data);
              },reject);
          }
      })
  }