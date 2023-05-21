import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/users', (req, res) => {
    res.json({ message: 'Lista de usuarios' })
})

app.post('/api/user/create', (req, res) => {
    const { username, email } = req.body

    res.json({ message: 'Usuario creado correctamente' })
})

app.put('/api/user/:id', (req, res) => {
    const userId = req.params.id
    const { username, email } = req.body

    res.json({ message: `Usando con id ${userId} actualizado correctamente` })
})

app.delete('/api/user/:id', (req, res) => {
    const userId = req.params.id

    res.json({ message: `Usando con id ${userId} eliminado correctamente` })
})

app.listen(port, () => {
    console.log(`Usando el puerto ${port} para este proyecto`)
})