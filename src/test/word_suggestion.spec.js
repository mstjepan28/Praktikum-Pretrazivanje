var assert = require('assert');

const word_suggestion = require("../word_suggestion.js");

const file = word_suggestion['file'];
const get_parsed_file = file.get_parsed_file;

const suggestion = word_suggestion['suggestion'];
const suggestionTool = suggestion.suggestionTool;


describe('get_parsed_file funkcija', function() {
    it('get_parsed_file za len = 1 / single_map.json', function () {
        let res = get_parsed_file(1)
        let expected =  { i: 1, and: 1, '00': 1, '01': 2 };
        assert.equal(JSON.stringify(res['0']), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 2 / double_map.json', function () {
        let res = get_parsed_file(2)
        let expected =  { this: 1 };
        assert.equal(JSON.stringify(res["hello everyone"]), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 3 / triple_map.json', function () {
        let res = get_parsed_file(3)
        let expected =  { is: 1 };
        assert.equal(JSON.stringify(res["hello everyone this"]), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 4 / undefined', function () {
        let res = get_parsed_file(4)
        let expected =  {};
        assert.equal(JSON.stringify(res), JSON.stringify(expected));
    });
});

describe('suggestionTool funkcija', function() {
    it('suggestionTool za nepostojece podatke', function () {
        let res = suggestionTool("a b c d e f g")
        assert.equal(res, "No matches");
    });
});



