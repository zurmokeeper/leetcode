/**
 * @param {string} s
 * @return {boolean}
 */
// The first answer
var isValid = function(s) {
    if (s.length % 2 === 1 || /[\}\]\)]/.test(s[0])) {
        return false;
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (/[\{\[\(]/.test(s[i])) {
            stack.push(s[i]);
        } else {
            var len = stack.length;
            if (Math.abs(stack[len - 1].charCodeAt(0) - s[i].charCodeAt(0)) <= 2) {   //通过字符的unicode编码的值来判断
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;       //比如"(("   只有左边的部分
    }
};

//From:https://leetcode.com/problems/valid-parentheses/discuss/9287/JavaScript-solution-with-a-stack
//The second answer

// var map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
// } 

// var isValid = function(s) {
//     var stack = [];
    
//     for (var i = 0; i < s.length; i++) {
//         var el = s[i];
        
//         if (map[el]) {
//             stack.push(map[el]);
//         } else {
//             if (el !== stack.pop()) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// };
