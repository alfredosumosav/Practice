// https://leetcode.com/problems/evaluate-reverse-polish-notation

var evalRPN = function (tokens) { // ["4","13","5","/","+"]
    let lastOperations = []; // [4,13,5,]
    const operations = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '/': (a, b) => parseInt(a / b),
        '*': (a, b) => a * b,
    }
    
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (!operations.hasOwnProperty(token)) {
            lastOperations.push(token);
        } else {
            const second = lastOperations.pop();
            const first = lastOperations.pop();
            const newOperation = operations[token](Number(first), Number(second))
            lastOperations.push(newOperation);
        }
    }
    return lastOperations;
};