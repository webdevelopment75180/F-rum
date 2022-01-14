const fs = require("fs")
let dados = require("./dados.json")

try {
    dados = JSON.parse(dados)
} catch {
    dados = dados
}

function cadastrar_usuario(obj) {

    dados.push(obj)
    dados = JSON.stringify(dados)

    fs.writeFile('./src/dados.json', dados, 'utf8', () => {
        console.log("Dados salvos!")
    })

    return 0
}

function logar_usuario(obj) {

    for (let i = 0; i < dados.length; i++) {
        if (obj["email"].toLowerCase() == dados[i]["email"]) return ["presente", dados[i]]
    }

    return ["ausente"]
}

module.exports = {
    cadastrar_usuario,
    logar_usuario
}