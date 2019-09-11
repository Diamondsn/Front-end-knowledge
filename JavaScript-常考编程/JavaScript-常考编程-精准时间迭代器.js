window.setMyInterval = function(func, interval){
    var nexttime    = interval;
    var start        = new Date().getTime();
    var now            = null;
    var toffset        = 0;
    
    var i            = 0;
    var timer         = null; 

    var gogogo = function(){
        timer = window.setTimeout(function(){
            i++;
            now            = new Date().getTime();
            toffset        = now - (start + i * interval);
            nexttime    = interval - toffset;

            func();

            gogogo();
        }, nexttime);
    };

    // 先立即执行一次
    func();
    // 启动迭代器
    gogogo();
    return timer;
}