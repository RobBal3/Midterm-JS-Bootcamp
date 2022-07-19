// 2. Create a constructor function to produce calculator instances (+,-,*,/ operations).

function Calculator() {
  let add = function (par1, par2) {
    return par1 + par2;
  };

  let subtract = function (par1, par2) {
    return par1 - par2;
  };

  let multiply = function (par1, par2) {
    return par1 * par2;
  };

  let divide = function (par1, par2) {
    return par1 / par2;
  };

  return function (par1, par2, operator) {
    if (operator === "+") {
      return add(par1, par2);
    }
    if (operator === "-") {
      return subtract(par1, par2);
    }
    if (operator === "*") {
      return multiply(par1, par2);
    }

    if (operator === "/") {
      return divide(par1, par2);
    }
  };
}

let calc = new Calculator();
calc(6, 2, "+");
// calc(1, 2, "+"); // => 3;
// calc(3, 4, "-"); //=> -1
