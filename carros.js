class Carro{
    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor
    constructor(marca, modelo, categoria, ano, quilometragem, valor){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

function get(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros"){
    return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Solicitação de Alunos não disponível!"))
}

function getById(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros", id){
    return fetch(url + `/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Solicitação de aluno específico não disponível!"))
}


async function postData(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros", data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
}

async function putData(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros", data = {}, id){
    const response = await fetch(url = url + `/${id}`, {
        method : "PUT",
        mode : "cors",
        cache : "no-cache",
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteData(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros", id){
    const response = await fetch(url = url + `/${id}`, {
        method : "DELETE",
        mode : "cors",
        cache : "no-cache",
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}

async function postDataList(listaCarro){
    for (let carro of listaCarro){
        await postData(undefined, carro)
            .then((resposta) => {
                console.log(`${carro.Modelo} adicionado ao banco de dados com sucesso.`)
            })
            .catch( () => {
                console.log(`${carro.Modelo} não adicionado ao banco de dados com sucesso.`)
            });
    }
    
}

let carros = []
carros.push(new Carro ("Honda", "Civic", "Sedan", "2021", 0, 119298))
carros.push(new Carro ("Jepp", "Compass Sport 1.3", "SUV", "2023", 0, 178590))
carros.push(new Carro ("Toyota", "Corolla GLi 2.0", "Sedan", "2024", 0, 148990))
