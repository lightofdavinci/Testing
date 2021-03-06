const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(2), 'number');
    });
    it('should return the number multiplied by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(2), 20);
      assert.equal(multiplyByTen(40), 400);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(2), 'number');
    });
    it('should return the correct outcome', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(2), -3);
      assert.equal(subtractFive(40), 35);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('abc', 'def'), 'boolean');
    });
    it('should return true when strings have the same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.isTrue(areSameLength('abc', 'def'));
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual('abc', 'def'), 'boolean');
    });
    it('should return the correct outcome', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual('abc', 'def'), false);
      assert.equal(areEqual('23', 23), false);
      assert.equal(areEqual(345, 345), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(NaN), 'boolean');
    });
    it('should return the correct outcome', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(45), true);
      assert.equal(lessThanNinety(100), false);
      assert.equal(lessThanNinety(90), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty([]), 'boolean');
    });
    it('should return the correct outcome', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(45), false);
      assert.equal(greaterThanFifty(100), true);
      assert.equal(greaterThanFifty(90), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.typeOf(add(24, 54), 'number');
    });
    it('should return the correct outcome', () => {
      const add = funcs.add;
      assert.equal(add(45, 5), 50);
      assert.equal(add(100, -100), 0);
      assert.equal(add('90', '45'), '9045');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(24, 54), 'number');
    });
    it('should return the correct outcome', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(45, 5), 40);
      assert.equal(subtract(100, -100), 200);
      assert.equal(subtract(60, 1), 59);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(54, 2), 'number');
    });
    it('should return the correct outcome', () => {
      const divide = funcs.divide;
      assert.equal(divide(45, 5), 9);
      assert.equal(divide(100, -100), -1);
      assert.equal(divide(60, 0), Infinity);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
      assert.equal(multiply(1, 0), 0);
      assert.equal(multiply(2, 45), 90);
      assert.equal(multiply(Infinity, Infinity), Infinity);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
      assert.equal(isEven(2), true);
      assert.equal(isEven(3), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
      assert.equal(isOdd(1), true);
      assert.equal(isOdd(2), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
      assert.equal(square(2), 4);
      assert.equal(square(3), 9);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
      assert.equal(cube(2), 8);
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
      assert.equal(raiseToPower(2, 4), 16);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
      assert.equal(roundNumber(5.5), 6);
      assert.equal(roundNumber(2.2), 2);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
      assert.equal(roundUp(2.2), 3);
      assert.equal(roundUp(1.01), 2);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
      assert.equal(addExclamationPoint('yes'), 'yes!');
      assert.equal(addExclamationPoint('what?'), 'what?!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
      assert.equal(combineNames('wallace', 'gromit'), 'wallace gromit');
      assert.equal(combineNames('mr.', 'x'), 'mr. x');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
      assert.equal(getGreeting('Mr. Spoon'), 'Hello Mr. Spoon!');
      assert.equal(getGreeting('Button Moon'), 'Hello Button Moon!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
      assert.equal(getRectangleArea(7, 5), 35);
      assert.equal(getRectangleArea(10, 1), 10);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
      assert.equal(getTriangleArea(7, 5), 17.5);
      assert.equal(getTriangleArea(10, 100), 500);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
      assert.equal(getCircleArea(3.5), 38.48451000647496);
      assert.equal(getCircleArea(8), 201.06192982974676);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
      assert.equal(getRectangularPrismVolume(4, 5, 7), 140);
      assert.equal(getRectangularPrismVolume(8, 10, 14), 1120);
    });
  });
});
