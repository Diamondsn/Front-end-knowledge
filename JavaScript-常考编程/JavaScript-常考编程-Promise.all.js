Promise.all = function (args) {
    if (!Array.isArray(args))
        return;
    return new Promise((resolve, reject) => {
        let length = args.length;
        let result = [];
        args.forEach((item, index) => {
            item.then((res) => {
                length--;
                result[index] = res;
                if (length == 0) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

// 测试
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
})
Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
