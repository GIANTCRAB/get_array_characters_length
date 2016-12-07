'use strict';

const get_array_characters_length = require('../index');

test('test single dimension array with 2 strings of 3 characters', () => {
    let singleArray = ["lol", "lol"];
    expect(get_array_characters_length(singleArray)).toBe(6);
});

test('test single dimension array with 1 string of 10 characters and 2 strings of 15 characters', () => {
    let singleArray = ["YYycsqxVTU", "xCxUFW9m2oN1Z5H", "u6Pz8fXuYAhIKwH"];
    expect(get_array_characters_length(singleArray)).toBe(40);
});

test('test single dimension array with 2 number of 5 characters', () => {
    let singleArray = [12345, 12345];
    expect(get_array_characters_length(singleArray)).toBe(10);
});

test('test single dimension array with 1 number of 5 characters and 1 string of 10 characters', () => {
    let singleArray = [12345, "ZBJb8ECQmS"];
    expect(get_array_characters_length(singleArray)).toBe(15);
});

test('test single dimension array with 2 true booleans', () => {
    let singleArray = [true, true];
    expect(get_array_characters_length(singleArray)).toBe(8);
});

test('test single dimension array with 2 false booleans', () => {
    let singleArray = [false, false];
    expect(get_array_characters_length(singleArray)).toBe(10);
});

test('test single dimension array with 1 true boolean and 1 false boolean', () => {
    let singleArray = [true, false];
    expect(get_array_characters_length(singleArray)).toBe(9);
});
