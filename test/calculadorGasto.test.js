const combustivel = require("../Combustivel.js")

test("Testando calculo de combustível com álcool e 40 km.", () => {
    expect(combustivel.calcularGasto(40, "álcool")).toBe(4)
});

test("Testando calculo de combustível com gasolina e 40 km.", () => {
    expect(combustivel.calcularGasto(40, "gasolina")).toBe(3)
});