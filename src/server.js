const door = 3003
const express = require("express")
const app = express()
const cors = require("cors")

const { cadastrar_usuario, logar_usuario } = require("./cadastrar_logar")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("."))

app.post("/cadastrar", (req, res, next) => {

    const rsp = logar_usuario(req.body)
    console.log(rsp[0] == "presente")

    if (rsp[0] == "presente") res.send(rsp[1])
    else if (rsp[0] == "ausente") {
        cadastrar_usuario(req.body)
        res.send("cadastrado")
    }

})

app.post("/logar", (req, res, next) => {
    rsp = logar_usuario(req.body)
    res.send(rsp)
})

app.listen(door, () => {
    console.log(`Servidor executando na porta ${door}`)
})