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

function zhongxubianli(node) {
    if(!node) {
        return
    }
    node.left && zhongxubianli(node.left)
    console.log(node.val)
    node.right && zhongxubianli(node.right)
}

function zhongxubainli(node) {
    var stack = [];
    var result = [];
    stack.push(node);
    while(stack.length) {
        var item = stack[stack.length-1];
        if(item.left && !item.left.isOK) {
            stack.push(item.left)
        } else if(!item.left || item.left && item.left.isOK) {
            var index = stack.pop();
            result.push(index.val);
            index.isOK = true;
            item.right && stack.push(item.right);
        }
    }
    console.log(result)
}

zhongxubianli(node1)