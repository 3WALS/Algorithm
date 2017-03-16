final = []
function rpsRecur(n,arr) {
  if (n > 0) {
    rpsRecur(n-1,[...arr,'rock']);
    rpsRecur(n-1,[...arr,'sissors']);
    rpsRecur(n-1,[...arr,'paper']);
  }
  else {
    final.push([...arr]);
  }
}
var rockPaperScissors = function (n) {
    rpsRecur(n, []);
    console.log(final);
}
rockPaperScissors(3);
