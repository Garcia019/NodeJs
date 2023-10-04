const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciais = require("./credentials.json")
const arquivo = require("./arquivo.json")
const { JWT } = require("google-auth-library")

const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
]

const BotCount = new JWT({
    email: credenciais.client_email,
    key: credenciais.private_key,
    scopes: SCOPES,
})

async function GetDoc(botCount = BotCount, titulo = "Planilha Qualquer"){
    let planilhaGoogle = await GoogleSpreadsheet.createNewSpreadsheetDocument(botCount, {title: `${titulo}`});
    return await planilhaGoogle.loadInfo()
}

async function ReadWorkSheet(botCount = BotCount, id = arquivo.id){
    const documento = await new GoogleSpreadsheet(id, botCount)
    await documento.loadInfo()
    const planilha = await documento.sheetsByIndex[0]
    const linhas = await planilha.getRows()
    let objetos = []
    linhas.forEach((undefined, index) =>{
        objetos.push(linhas[index].toObject())
    })
    return objetos
}

async function AddUser(url = "https://apigenerator.dronahq.com/api/Otco6LjQ/Usuarios", data = {}){
    const response = await fetch(url,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    return response.json()
}

async function init(id = arquivo.id){
   let dadosUsuarios = await ReadWorkSheet(undefined, id);
   for (const dado of dadosUsuarios){
        try{
        await AddUser(undefined, dado)
        console.log(`Usuário ${dado.nome} adicionado com sucesso a API!`)
       }catch{
        console.log(`Usuário ${dado.nome} não adicionados a API!`)
       }
   }
}

init()