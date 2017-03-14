/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function(string) {
    var chkr = {};
    var order = '';
    for (var char of string) {
        if (chkr[char] === undefined) {
            chkr[char] = 1;
            order += char;
        }
        else {
            chkr[char] += 1;
            order += char;
        }
    }
    for (var char of order) {
        if (chkr[char] === 1) {return char;}
    }
};
