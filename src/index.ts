import express from 'express'
import cors from 'cors'
import axios from 'axios'
// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()
// Cors
app.use(cors())
// Endpoint raiz

const baseUrl = 'https://random-d.uk/api/v2'

app.get('/api/random', async (req, res) => {
  await axios.get(baseUrl + '/random').then(({data}) => {
    res.send(data)
  })
})

app.get('/api/randomimg', async (req, res) => {
  await axios.get(baseUrl + '/randomimg').then(({data}) => {
    res.send(data)
  })
})

app.get('/api/list', async (req, res) => {
  await axios.get(baseUrl + '/list').then(({data}) => {
    res.send(data)
  })
})
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})