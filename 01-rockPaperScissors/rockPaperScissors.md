# Rock Paper Scissors

The task was to write a function that generates every sequence of throws a single player could throw over a three-round game of rock-paper-scissors.

The output should look something like:
> [["rock", "rock", "rock"],
> ["rock", "rock", "paper"],
> ["rock", "rock", "scissors"],
> ["rock", "paper", "rock"],
> ...etc...
> ]

Extra credit was granted if:
* Make your function return answers for any number of rounds.
> Example:
> rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

### Solution 1. Using Recursive Function

```javascript
var rockPaperScissors = function(n) {
  var result = [],
      cases = ['Rock', 'Paper', 'Scissor'],
      temp = [];
  var recursive = function(n, arr) {
    for ( var i = 0; i < cases.length; i++ ) {
      if ( n === 0 ) {
        // stop executing recursive function
        // til the value of n becomes 0.
        // push the copy of arr to the result
        // * Remember: array is a reference type
        // * You must throw the copy of the arr to the variable result.
        result.push(arr.slice(0));
        // and end the function.
        return ;
      }
      // first, push an element.
      arr.push(cases[i]);
      // second, call recursive again with passing (n-1) as the argument argument of "n"
      recursive(n-1, arr);
      // lastly, pop the last element
      arr.pop();
    }
  };
  recursive(n, temp);
  return result;
}
```

### Solution 2. A Genius Way
[Sungjun](https://github.com/jun-Sogang) figured out an awesome way to solve the very same question. It basically uses the concept of digits and its repetitive pattern.

```javascript
var rockPaperScissors = function(n) {
  var cases = ['Rock', 'Paper', 'Scissor'],
      result = [],
      innerResult = [];
  // i ===> there is going to be Math.pow(3, n) times of pushing the data to the variable result.
  for ( var i = 0; i < Math.pow(3, n); i++ ) {
    // Reset / initializing innerResult value
    innerResult = [];
    for ( var j = 0; j < n; j++ ) {
      innerResult.push(cases[Math.floor(i/Math(3, j))%3]);
    }
    result.push(innerResult.slice(0));
  }
  return result;
};
```
