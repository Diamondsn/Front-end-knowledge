var values = [1, 2, 3, 4, 5];

values.sort(function(){
    return Math.random() - 0.5;
});
// v8 在处理 sort 方法时，当目标数组长度小于 10 时，使用插入排序；反之，使用快速排序和插入排序的混合排序。所以这个方法是有问题的
// Fisher–Yates
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
        // ES6:[a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}