function sleep(wait) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, wait);
    })
}

async function test() {
    for (let i = 1; i <= 10; ++i) {
        await sleep(1000);
        console.log(i);
    }
}

test();