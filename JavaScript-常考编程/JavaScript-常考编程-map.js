Array.prototype.MyMap = function(fn, context){
    var arr = Array.prototype.slice.call(this);//由于是ES5所以就不用...展开符了
    var mappedArr = [];
    for (var i = 0; i < arr.length; i++ ){
      mappedArr.push(fn.call(context, arr[i], i, this));
    }
    return mappedArr;
  }