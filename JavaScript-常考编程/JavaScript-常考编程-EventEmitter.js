class EventEmitter{
    constructor(){
        this.events={};
    }
    on(event,handle){
        this.events[event]?this.events[event].push(handle):this.events[event]=[handle];
        return this;
    }
    off(event,handle){
        if(this.events[event])
        this.events[event]=this.events[event].filter((item)=>item!==handle);
        return this;
    }
    emit(event,...args){
        if(this.events[event])
        this.events[event].forEach((func)=>func.apply(this,args));
        return this;
    }
    once(event,handle){
        let wrapFunc=(...args)=>{
            handle.apply(this,args);
            this.off(event,wrapFunc);
        }
        this.on(event,wrapFunc);
        return this;
    }
}

// 测试
function handle1(msg){
    console.log('1'+msg);
}
function handle2(msg){
    console.log('2'+msg);
}
function handle3(msg){
    console.log('3'+msg);
}
function handle4(msg){
    console.log('4'+msg);
}
var emitter=new EventEmitter();
emitter.on('click',handle1);
emitter.on('click',handle2);
emitter.emit('click',"m");
emitter.off('click',handle2);
emitter.emit('click',"m");
emitter.once('once',handle3);
emitter.emit('once','t');
emitter.emit('once','t');