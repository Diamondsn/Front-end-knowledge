function test(n) {
    var y = 0,num=n;
    while (n) {
        y = y * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    if (y == num) {
        return true;
    } else {
        return false;
    }
}

console.log(test(12321));