const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, currItem) => total + currItem, 0);
};

const multiply = function(array) {
  return array.reduce((total, currItem) => total * currItem, 1);
};

const power = function(x, n) {
	return Math.pow(x,n);
};

const factorial = function(n) {
	if (n === 0){
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
