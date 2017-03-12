/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
	var rps = ["rock", "paper", "scissors"];
    var result = [];
    var nString = "";
    for (var i = 0; i < n; i++) {
        nString = "0" + nString;
    }
    do {
        var temp = [];
        for (var j = 0; j < n; j++) {
            temp.push(rps[nString[j]]);
        }
        result.push(temp);
        nString = plus(nString);
    }
    while (parseInt(nString) !== 0);
    return result;
};

var plus = function (nString) {
	var result = "";
	var current = "";
    var chk = true;
	for (var i = nString.length-1; i >= 0; i--) {
		if (chk === true) {
			current = String(parseInt(nString[i]) + 1);
            if (current === '3') {
                chk = true;
                result = "0" + result;
            }
            else {
                result = current + result;
                chk = false;
            }
		}
		else {
			result = nString[i] + result;
		}
	}
	return result;
};
console.log(rockPaperScissors(3));
