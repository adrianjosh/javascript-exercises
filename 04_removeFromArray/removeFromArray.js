const removeFromArray = function(...arg) {
    let arr = arg[0];
    return arr.filter(item => !arg.includes(item));
}




// Do not edit below this line
module.exports = removeFromArray;
