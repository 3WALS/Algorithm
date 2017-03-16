/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
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

firstNonRepeatedCharacter('AACBDB');
