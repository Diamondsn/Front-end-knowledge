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

function qianxubianli(node) {
    if(!node) {
    	return
    }
    console.log(node.val)
    node.left&&qianxubianli(node.left)
    node.right&&qianxubianli(node.right)
}

function qianxubianli(node) {
    var stack = [];
    var result = [];
    stack.push(node);
    while(stack.length) {
        var item = stack.pop();
        result.push(item.val);
        if(item.right) {
            stack.push(item.right)
        }
        if(item.left) {
            stack.push(item.left);
        }
    }
    console.log(result)
}

qianxubianli(node1)