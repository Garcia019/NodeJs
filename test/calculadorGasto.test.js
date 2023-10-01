const combustivel = require("../Combustivel.js")

test("Testando calculo de combustível com álcool e 40 km.", () => {
    expect(combustivel.calcularGasto(40, "álcool")).toBe(4)
});

test("Testando calculo de combustível com gasolina e 40 km.", () => {
    expect(combustivel.calcularGasto(40, "gasolina")).toBe(3)
});

test("Testando calculo de combustível com gasolina e distancia negativa", () => {
    expect(combustivel.calcularGasto(-40, "gasolina")).toBe(false)
});

test("Testando calculo de combustível com álcool e distancia negativa", () => {
    expect(combustivel.calcularGasto(-40, "álcool")).toBe(false)
});

test("Testando calculo de combustível com nenhum combustével e 40km", () => {
    expect(combustivel.calcularGasto(40,"")).toBe(false)
});