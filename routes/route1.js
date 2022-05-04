const express = require('express')
const route1 = express()

route1.get('/', (req,res) => {
    res.send("op iikaiseoudfjewojweiwejowejfowejiohfwejhufweuof")
})

route1.get('/routeteste', (req,res) => {
    res.send("alo alo alo alo")
})

module.exports = route1