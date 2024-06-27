const palindromes = function (str) {
    const toRemove = (/[^0-9a-z]/gi);

    let lowerStr = str.toLowerCase().replace(toRemove, '');
    let reverseStr = lowerStr.split("").reverse().join("");

    return lowerStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;


