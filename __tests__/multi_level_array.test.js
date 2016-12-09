'use strict';

const get_array_characters_length = require('../index');

test('test multi level array with 4 strings of 10 characters', () => {
    let multiLevelArray = [
        "q0pgsaqzfM", [
            "FH5TcWSwYd", [
                "8liT7kBKfr", [
                    "ZoMZPBiJxN"
                ]
            ]
        ]
    ];
    expect(get_array_characters_length(multiLevelArray)).toBe(40);
});

test('test multi level array with 4 numbers of 5 characters', () => {
    let multiLevelArray = [
        12345, [
            12345, [
                12345, [
                    12345
                ]
            ]
        ]
    ];
    expect(get_array_characters_length(multiLevelArray)).toBe(20);
});
