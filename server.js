var express = require("express")
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

let links = new Array();
let id = 1
let encurtados = new Array()

function procura(link) {
    for(let linkt of links) {
        if (link == linkt) {
            return true
        }
    }

    return false
}

app.post('/u', (request, response) => {
    let count = 0
    const url = request.body.link
    const new_url = `http://localhost:3000/u/${id}`
    if(url.length <= 2){
        response.status(400).json("Envie uma URL válida")
    } else if (procura(url)){
        response.status(400).json("A URL já gerada")
    } else if(new_url.length >= url.length){
        response.status(400).json("A URL gerada é maior ou igual à original")
    } else {
        id++
        links.push(url)
        encurtados.push(new_url)
        response.status(200).json(new_url)
    }
})

app.get('/u/:id', (request, response) => {
    const id = parseInt(request.params.id)
    let l = ''
    
    if(id <= links.length) {
        l = links[id - 1]
    } else {
        response.status(404).json("id não encontrado")
    }
    
    response.json(l)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})

app.get("")