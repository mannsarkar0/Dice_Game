function dice() {
  // Random number 1 to 6
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;

  return [num1, num2];
}

function show() {
  let result = dice();

  let diceImage1 = "images/dice" + result[0] + ".png";
  let diceImage2 = "images/dice" + result[1] + ".png";

  // Image src set करना
  document.getElementById("dice1").setAttribute("src", diceImage1);
  document.getElementById("dice2").setAttribute("src", diceImage2);

  // Winner check करना
  if (result[0] > result[1]) {
    document.getElementById("text").innerHTML = "🚩 Player 1 won!";
  } else if (result[0] < result[1]) {
    document.getElementById("text").innerHTML = "🚩 Player 2 won!";
  } else {
    document.getElementById("text").innerHTML = "😃 It's a tie!";
  }
}
