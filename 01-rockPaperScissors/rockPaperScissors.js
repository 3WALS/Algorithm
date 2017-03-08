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
	var scissorsRockPaper = ["scissors", "rock", "paper"];
	var sub_result = [];
	var result = [];
	for(var i=0;i<n;i++){
		sub_result[i] = _.first(_shuffle(scissorsRockPaper),1);
	}
	for(var j=0;j<n;j++){
		result[j].push(sub_result);
	}
	return result;
  // TODO: your solution here
};