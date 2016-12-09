'use strict';

const get_array_characters_length = arrayGiven => {
    let returnVal = 0;
    if (Array.isArray(arrayGiven)) {
        returnVal = arrayGiven.reduce((accumulator, currentVal) => accumulator + get_array_characters_length(currentVal), 0);
    }
    else if (typeof arrayGiven === 'object') {
        for (var key in arrayGiven) {
            if (arrayGiven.hasOwnProperty(key)) {
                returnVal = get_array_characters_length(key) + get_array_characters_length(arrayGiven[key]);
            }
        }
    }
    else {
        returnVal = arrayGiven.toString().length;
    }
    return returnVal;
};

module.exports = get_array_characters_length;
