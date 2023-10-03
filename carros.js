

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
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
        .catch((error) => console.error("Solicitação de todos os carros específicos não disponíveis!"))
}

function getById(url = "https://apigenerator.dronahq.com/api/iWLFaLfc/Carros", id){
    return fetch(url + `/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((error) => console.error("Solicitação de Carro específico não disponível!"))
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

function carroId(id){
    getById(undefined, id)
        .then(carro => {
            let lista = [carro.Marca, carro.Modelo, carro.Ano, carro.Valor]
            console.log(lista)
        })
}

function carroValor(newValor, id){
    let newCarro 
    getById(undefined,id)
        .then(carro => {
            newCarro = carro
            newCarro.Valor = newValor
            putData(undefined, newCarro, id)
        })
}

function adicionarCarro (marca, modelo, categoria, ano, quilometragem, valor){
    postData(undefined, new Carro(marca, modelo, categoria, ano, quilometragem, valor))
}
let carros = []
carros.push(new Carro ("Honda", "Civic", "Sedan", "2021", 0, 119298))
carros.push(new Carro ("Jepp", "Compass Sport 1.3", "SUV", "2023", 0, 178590))
carros.push(new Carro ("Toyota", "Corolla GLi 2.0", "Sedan", "2024", 0, 148990))

let opcao 
do{
    opcao = Number(prompt("Digite a Opção desejada:\n1 - Mostrar na tela a lista de todos os carros.\n2 - Retornar dados de algum carro por ID.\n3 - Adicionar algum carro ao banco de dados\n4 - Alterar valor de algum carro pelo ID.\n5 - Deletar algum carro pelo ID.\n"))
    switch(opcao){
        case 1:
            get()
                .then(carros => {
                    for( let carro of carros){
                        console.log(carro)
                    }
                })
            break;
        case 2:
            let id = prompt("Digite o ID do carro desejado:")
            carroId(id)
            break;
        case 3:
            let marca = prompt("Digite a marca do carro:")
            let modelo = prompt("Digite o modelo do carro:")
            let categoria = prompt("Digite a categoria do carro:")
            let ano  = prompt("Digite o ano do carro:")
            let quilometragem = prompt("Digite a quilometragem do carro:")
            let valor = prompt("Digite o valor do carro:")
            adicionarCarro(marca, modelo, categoria, ano, quilometragem, valor)
            break;
        case 4:
            id = prompt("Digite o ID do carro que deseja alterar o valor:")
            let newValor = prompt("Digite o novo valor do carro:")
            carroValor(newValor, id)
        case 5:
            id = prompt("Digite o ID do carro que deseja deletar:")
            deleteData(undefined, id)
            break;
        default:
            alert("Você não selecionou nenhuma das opcões!\nSaindo das opções")
            opcao = 6
            break;
    }
}while(opcao != 6)
