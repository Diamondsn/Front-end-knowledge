function Node(val) {
    this.left = this.right = null
    this.val = val
}

var node4 = {left: null, right: null, val: 4 }; 
var node5 = {left: null, right: null, val: 5 }; 
var node6 = {left: null, right: null, val: 6 }; 
var node7 = {left: null, right: null, val: 7 };
var node3 = {left: node6, right: node7, val: 3 };
var node2 = {left: node4, right: node5, val: 2 };
var node1 = {left: node2, right: node3, val: 1 };

function houxubianli(node) {
    if(!node) {
        return
    }
    node.left && houxubianli(node.left)
    node.right && houxubianli(node.right)
    console.log(node.val)
}

function houxubianli(node) {
    var stack = [];
    var result = [];
    stack.push(node);
    while(stack.length) {
        var item = stack[stack.length-1];
        if(item.left && !item.left.isOK) {
            stack.push(item.left)
        } else if(item.right && !item.right.isOK) {
            stack.push(item.right)
        // 如果是叶子节点，或者子节点都输出了，则可以弹出该节点
        } else if((!item.left || item.left && item.left.isOK) && (!item.right || item.right && item.right.isOK)) {
            var index = stack.pop();
            result.push(index.val);
            index.isOK = true;
        }
    }
    console.log(result)
}

houxubianli(node1)