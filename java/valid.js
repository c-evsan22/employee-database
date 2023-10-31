const {isDecimal} = require('validator');

const validation = {
    checkString(input){
        return input !== ''||'Please enter a valid response';
    },
    checkSalary(amount){
        if (isDecimal(amount)) return true;
        return 'Please enter a valid salary';
    },
    compareStrings(string1,string2){
        if(string1 === string2) return true;
    }
};

module.exports = validation;

