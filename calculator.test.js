// Set up a mock DOM for testing
document.body.innerHTML = `
  <div class="container">
    <div class="running-display" id="running-display"></div>
    <div class="display">0</div>
    <div class="button-container">
      <button class="calc-button number-button" id="button-0">0</button>
      <button class="calc-button number-button" id="button-1">1</button>
      <button class="calc-button number-button" id="button-2">2</button>
      <button class="calc-button number-button" id="button-3">3</button>
      <button class="calc-button number-button" id="button-4">4</button>
      <button class="calc-button number-button" id="button-5">5</button>
      <button class="calc-button number-button" id="button-6">6</button>
      <button class="calc-button number-button" id="button-7">7</button>
      <button class="calc-button number-button" id="button-8">8</button>
      <button class="calc-button number-button" id="button-9">9</button>
      <button class="calc-button operator-button" id="button-add">+</button>
      <button class="calc-button operator-button" id="button-subtract">-</button>
      <button class="calc-button operator-button" id="button-multiply">*</button>
      <button class="calc-button operator-button" id="button-divide">/</button>
      <button class="calc-button utility-button" id="button-clear">C</button>
      <button class="calc-button utility-button" id="button-equals">=</button>
    </div>
  </div>
`;

// Now import the functions you want to test
const {
  add,
  subtract,
  multiply,
  divide,
  operate,
  clearValues,
  clearCalculator,
} = require("./script");

// Test Suite for Mathematical Functions
describe("Mathematical Functions", () => {
  test("add function adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract function subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiply function multiplies two numbers", () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test("divide function divides two numbers", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("divide function handles division by zero", () => {
    expect(divide(8, 0)).toBe("Error");
  });
});

// Test Suite for Operate Function
