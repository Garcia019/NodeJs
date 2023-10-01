const calculadora = require("../calculadora.js")

test("Somar 1 + 1 é igual a 2.", () => {
  expect(calculadora.somar (1, 1)).toBe(2);
});

test("Subtrair 1 - 1 é igual a 0.", () => {
  expect(calculadora.subtrair (1, 1)).toBe(0);
});

test("Multiplicar 1 * 1 é igual a 1.", () => {
  expect(calculadora.multiplicar (1, 1)).toBe(1);
});

test("Dividir 1 / 1 é igual a 1.", () => {
  expect(calculadora.dividir (1, 1)).toBe(1);
});