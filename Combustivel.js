const calculadora = require("./calculadora.js")

function calcularGasto(distancia, combustivel){
    let rendimento
    if(distancia < 0){
        return false
    }
    if(combustivel.toUpperCase() === "ÁLCOOL"){
        rendimento = 11
    }else if(combustivel.toUpperCase() === "GASOLINA"){
        rendimento = 16
    }else{
        return false
    }
    return Math.ceil((calculadora.dividir(Math.ceil(distancia), rendimento)))
}

module.exports = {calcularGasto}