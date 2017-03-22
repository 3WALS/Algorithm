/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var result = '';
  var obj = {};
  for (var char of string1) {
    if (char === ' ') continue;
    else if (obj[char] === undefined) obj[char] = true;
  }
  for (char of string2) {
  	if (obj[char] === true) {
      result += char;
      obj[char] = false;
    }
  }
  return result;
};

var res = commonCharacters('acexivoukss', 'aegihobukss');
console.log(res);
