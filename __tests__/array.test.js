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

test('test single dimension array with 2 NaN', () => {
    let singleArray = [NaN, NaN];
    expect(get_array_characters_length(singleArray)).toBe(6);
});

test('test single dimension array with 2 Infinity', () => {
    let singleArray = [Infinity, Infinity];
    expect(get_array_characters_length(singleArray)).toBe(16);
});

test('test single dimension array with 2 json object with 10 characters', () => {
    let singleArray = [{
        "bff0sd5abA": "cBB4UgOftN"
    }, {
        "sZKdgwv1RM": "Q8ndJ2RCap"
    }];
    expect(get_array_characters_length(singleArray)).toBe(40);
});

test('test single dimension array with 2 json object with 10 characters as key and true booleans as value', () => {
    let singleArray = [{
        "bff0sd5abA": true
    }, {
        "sZKdgwv1RM": true
    }];
    expect(get_array_characters_length(singleArray)).toBe(28);
});

test('test single dimension array with 2 json object with 10 characters as key and false booleans as value', () => {
    let singleArray = [{
        "bff0sd5abA": false
    }, {
        "sZKdgwv1RM": false
    }];
    expect(get_array_characters_length(singleArray)).toBe(30);
});
