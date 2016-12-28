[![Build Status](https://travis-ci.org/GIANTCRAB/get_array_characters_length.svg?branch=master)](https://travis-ci.org/GIANTCRAB/get_array_characters_length)
[![Coverage Status](https://coveralls.io/repos/github/GIANTCRAB/get_array_characters_length/badge.svg?branch=master)](https://coveralls.io/github/GIANTCRAB/get_array_characters_length?branch=master)
# get_array_characters_length
A function to help you get the accurate amount of characters in multi-dimensional arrays and objects.

### Usage
```
get_array_characters_length = require('get_array_characters_length'); 

get_array_characters_length(['john', 'cena']);
// prints out '8'

get_array_characters_length(['john', 'cena', ['cant', 'see', ['him']]]);
// prints out '18'
```