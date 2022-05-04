const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Wossrld!')
})

const apiUsuario = {
  "nome": "Eduardo",
  "idade": "28",
	"escola": "Salesiano",
	"trabalho": "Microsoft",
	"cidade": "São Mateus"
}

app.post('/usuario2', (req, res) => {
  console.log(apiUsuario)
  res.send(`O usuario que fez a requisição foi ${apiUsuario.nome} e tem ${apiUsuario.idade} anos, estuda no ${apiUsuario.escola},
  trabalha na ${apiUsuario.trabalho} e reside na cidade de ${apiUsuario.cidade}.`)
})

app.post('/usuario1', (req, res) => {
  console.log(req.body)
  res.send(`O usuario que fez a requisição foi ${req.body.nome} e tem ${req.body.idade} anos, estuda no ${req.body.escola},
  trabalha na ${req.body.trabalho} e reside na cidade de ${req.body.cidade}.`) //api no insomnia
})

app.get('/teste', (req, res) => {
    res.json({"mensagem": "testeeteeeeeeeeetetetetetetet"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})