/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 /*
var firstNonRepeatedCharacter = function(string) {
    var chkr = {};
    var order = '';
    for (var char of string) {
        if (chkr[char] === undefined) {
            chkr[char] = 1;
            order += char;
        }
        else chkr[char] += 1;
    }
    for (var char of order) {
        if (chkr[char] === 1) return char;
    }
};
*/

var firstNonRepeatedCharacter = function(string) {
  var check = string[0],
      arr = string.split(''),
      length = string.length;
  for ( var i = 0; i < length; i++ ) {
    if ( i === 0 || arr[i-1] === arr[i] ) continue;
    return arr[i];
  }
};

console.log(firstNonRepeatedCharacter('aaabbc'));
