'use strict';

const get_array_characters_length = arrayGiven => Array.isArray(arrayGiven) ? arrayGiven.reduce((accumulator, currentVal) => accumulator + get_array_characters_length(currentVal), 0) : arrayGiven.toString().length;

module.exports = get_array_characters_length;
