'use strict';
module.exports = get_array_characters_length;

function is_array(array) {
    return Object.prototype.toString.call( array ) === '[object Array]' && array instanceof Array;
}

function get_array_characters_length(array) {
    // Check if paramter is array
    if(is_array(array)) {
        // Is array, we recurse and count
        let totalCharLength = 0;
        for(let i = 0; i < array.length; i++) {
            // See if we can go deeper
            if(is_array(array[i])) {
                // We can and we shall
                totalCharLength += get_array_characters_length(array[i]);
            } else {
                totalCharLength += array[i].length;
            }
        }
        return totalCharLength;
    } else {
        // Failed check
        return false;
    }
}