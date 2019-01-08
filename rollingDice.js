var args = process.argv[2]; //get's info from the comman line

function rollDice (args) {
  let numberOfDiceRolls = [];
  function diceLimit(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function calcRolls (number) {
    for (var step = 0; step < number; step++) {
      numberOfDiceRolls.push(diceLimit(1, 7));
    }
    return numberOfDiceRolls.join(', ');
  }
  return calcRolls(args);
}

var letsPlay = rollDice(args);
console.log(letsPlay);



