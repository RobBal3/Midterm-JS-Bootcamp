// 2. Create a constructor function to produce calculator instances (+,-,*,/ operations).

function Calculator(par1, par2, operator) {
  this.par1 = par1;
  this.par2 = par2;
  this.operator = operator;

  this.add = function () {
    return this.par1 + this.par2;
  };

  this.subtract = function () {
    return this.par1 - this.par2;
  };

  this.multiply = function () {
    return this.par1 * this.par2;
  };

  this.divide = function () {
    return this.par1 / this.par2;
  };

  if (operator === "+") {
    return this.add();
  }

  if (operator === "-") {
    return this.subtract();
  }

  if (operator === "*") {
    return this.multiply();
  }

  if (operator === "/") {
    return this.divide();
  }
}

let calc = new Calculator(1, 2, "+");
// calc(1, 2, "+"); // => 3;
// calc(3, 4, "-"); //=> -1
