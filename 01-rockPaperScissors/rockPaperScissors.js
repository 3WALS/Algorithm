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
	//plus(nString)
};

var plus = function (nString) {
	var nString = String(parseInt(nString[nString.length-1]) + 1);
	var result = "";
	var current = "";
	if (nString[nString.length-1] === "3") {
		chk = true;
	}
	else {
		chk = false;
	}
	console.log(chk);
	for (var i = nString.length-1; i>=0; i--) {
		if (chk === true) {
			current = String(parseInt(nString[i]) + 1);
		}
		if (current === '3') {
			chk = true;
			result = "0" + result;
			console.log(result);
		}
		else {
			result = current + result;
			console.log(result);
		}
	}
	console.log(current, chk, result);
	return result;
}
rockPaperScissors(4);
console.log(plus('011'));
