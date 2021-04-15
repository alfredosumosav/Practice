var subtractProductAndSum = function(n) {
    
    let prod = 1;
    let sum = 0;
    
    while (n > 0) {
        prod = prod * (n % 10);
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    
    return (prod - sum);
};