import express from 'express'
import db from './database'

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/user/:id', (req, res) => {
    const userId = req.params.id

    db.get('SELECT * FROM users WHERE id = ?', userId, (error, row) => {
        if(error) {
            res.status(500).json({ error: 'Error al obtener usuario' })
        } else if(row) {
            res.json(row)
        } else {
            res.status(404).json({ message: `Usuario con id ${userId} no encontrado` })
        }
    })
})

app.get('/api/user', (req, res) => {
    db.all('SELECT * FROM users', (error, rows) => {
        if(error) {
            res.status(500).json({ error: 'Error al obtener usuarios' })
        } else {
            res.json({ message: 'Lista de usuarios', data: rows })
        }
    })
})

app.post('/api/user/create', (req, res) => {
    const { username, email } = req.body

    if(username === 'admin') {
        return res.status(400).json({ message: 'El nombre de usuario no puede ser admin' })
    }

    db.run('INSERT INTO users(username, email) VALUES(?, ?)', [username, email], (error) => {
        if(error) {
            res.status(500).json({ error: 'Error al crear usuario' })
        } else {
            res.json({ message: 'Usuario creado correctamente' })
        }
    })
})

app.put('/api/user/:id', (req, res) => {
    const userId = req.params.id
    const { username, email } = req.body

    db.run('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], (error) => {
        if(error) {
            res.status(500).json({ error: 'Error al actualizar usuario' })
        } else {
            res.json({ message: `Usando con id ${userId} actualizado correctamente` })
        }
    })
})

app.delete('/api/user/:id', (req, res) => {
    const userId = req.params.id

    db.run('DELETE FROM users WHERE id = ?', userId, (error) => {
        if(error) {
            res.status(500).json({ error: 'Error al eliminar usuario' })
        } else {
            res.json({ message: `Usando con id ${userId} eliminado correctamente` })
        }
    })
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Usando el puerto ${port} para este proyecto`)
    })
}

export default app