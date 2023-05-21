import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Typescript y Node funcionan')
})

app.listen(port, () => {
    console.log(`Usando el puerto ${port} para este proyecto`)
})