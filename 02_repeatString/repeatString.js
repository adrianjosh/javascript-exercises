const repeatString = function(string,num) {
    let stringPlaceholder = '';
    for (let i = 0; i < num; i++) {
        stringPlaceholder += string;
    }
    if (num < 0){
        return stringPlaceholder = 'ERROR';
    } else {
        return stringPlaceholder;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
