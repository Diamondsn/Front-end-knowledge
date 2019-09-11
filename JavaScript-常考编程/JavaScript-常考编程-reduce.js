Array.prototype.myReduce = function(fn, initialValue) {
    var arr = Array.prototype.slice.call(this);
    var res, startIndex;
    res = initialValue ? initialValue : arr[0];
    startIndex = initialValue ? 0 : 1;
    for(var i = startIndex; i < arr.length; i++) {
      res = fn.call(null, res, arr[i], i, this);
    }
    return res;
  }