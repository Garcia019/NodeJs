async function TesteAsync(){
    console.log("Iniciando")
    let exemplo = await fetch("http://httpbin.org/get")
    console.log(exemplo)
    console.log("Terminou a requisição!")
}

function Teste(){
    console.log("Iniciando")
    let exemplo = fetch("http://httpbin.org/get").then((res) => {
        console.log("Aqui ta dentro do then")
        console.log(res)
    })
    console.log(exemplo)
    console.log("Depois da chamada!")
}



