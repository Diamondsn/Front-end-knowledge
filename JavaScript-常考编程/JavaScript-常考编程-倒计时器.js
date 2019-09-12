var oDiv = document.getElementById('div1');

        function timeLeft(){
            //实际开发中此时间从服务器获取，避免客户端调整时间
            var now = new Date();
            var future = new Date(2018,5,20,16,30,20);

            // alert(future - now);//弹出与当前时间相差的毫秒数：12469935436
            var milli = parseInt((future - now)/1000);

            //活动当天页面下线，避免倒计时到点后继续计负时
            // if(milli <= 0){
            //  //页面跳转，不执行下面的代码了
            //  window.location.href = "http://www.baidu.com";
            // }

            var day = parseInt(milli / 86400);
            var hour = parseInt(milli % 86400 / 3600);
            var minute = parseInt(((milli % 86400) % 3600) / 60);
            var second = milli % 60;

            oDiv.innerHTML = '距离2018年11月12日00时00分00秒还有' + day + '天' + toDouble(hour) + '时' + toDouble(minute) + '分' + toDouble(second) + '秒';
        }
        
        timeLeft();
        setInterval(timeLeft, 1000);
    }
