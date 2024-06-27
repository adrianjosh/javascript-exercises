const fibonacci = function(nth) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    for (let i = 1; i <= nth; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    if(nth < 0) {
        return "OOPS";
    } else {
        return n1;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
