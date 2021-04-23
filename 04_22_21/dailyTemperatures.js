// https://leetcode.com/problems/daily-temperatures/submissions/

// O(n) time and O(n) space, where n is the number of elements in the input array
var dailyTemperatures = function(T) {
    
    // edge cases
    if(!T){return []}
    else if(T.length == 1){return [0]}
    
    let n = T.length
    let result = [...Array(n)] // result array
    
	// last element would surely be 0 since no warmer temp to right will exist
	result[n-1] = 0 
    
    let i = n-2 // starting from second last element
    
    // push in last element to our stack
    // since even it didnot have a warmer temp to right but it can itself be a warmer temp for someone else on left
    let stack = [[T[n-1],n-1]] 
    
    // while we have elements to process
    // Range of i is : [n-2,0] i.e we start from ~~end
    while(i >= 0){ // i points to CURRENT temp under process
        
        // until stack exists and next greater not found
        while(stack.length !== 0 && stack[stack.length-1][0] <= T[i]){
            stack.pop() // pop elements
        }
        
        if(stack.length === 0){ // if we encounter empty stack
            result[i] = 0 // means CURRENT temp dint have any warmer temp on right
        }
        else{ // else CURRENT temp DID have a warmer temp on right
            result[i] = stack[stack.length-1][1]-i // assign the day count using indices
        }
        
        // also push the CURRENT temp to stack
        // as it might serve as warmer temp for someone else on left
        stack.push([T[i],i]) 
        i-=1 // decrement pointer to process next temperature
    }
    return result
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]