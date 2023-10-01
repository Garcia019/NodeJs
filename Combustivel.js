const calculadora = require("./calculadora.js")

function calcularGasto(distancia, combustivel){
    let rendimento
    if(combustivel.toUpperCase() === "ÁLCOOL"){
        rendimento = 11
    }else if(combustivel.toUpperCase() === "GASOLINA"){
        rendimento = 16
    }
    return Math.ceil((calculadora.dividir(Math.ceil(distancia), rendimento)))
}

module.exports = {calcularGasto}