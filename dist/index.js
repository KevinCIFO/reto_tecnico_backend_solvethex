"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    database_1.default.get('SELECT * FROM users WHERE id = ?', userId, (error, row) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener usuario' });
        }
        else if (row) {
            res.json(row);
        }
        else {
            res.status(404).json({ message: `Usuario con id ${userId} no encontrado` });
        }
    });
});
app.get('/api/users', (req, res) => {
    database_1.default.all('SELECT * FROM users', (error, rows) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener usuarios' });
        }
        else {
            res.json({ message: 'Lista de usuarios', data: rows });
        }
    });
});
app.post('/api/user/create', (req, res) => {
    const { username, email } = req.body;
    database_1.default.run('INSERT INTO users(username, email) VALUES(?, ?)', [username, email], (error) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear usuario' });
        }
        else {
            res.json({ message: 'Usuario creado correctamente' });
        }
    });
});
app.put('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    database_1.default.run('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], (error) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar usuario' });
        }
        else {
            res.json({ message: `Usando con id ${userId} actualizado correctamente` });
        }
    });
});
app.delete('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    database_1.default.run('DELETE FROM users WHERE id = ?', userId, (error) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
        else {
            res.json({ message: `Usando con id ${userId} eliminado correctamente` });
        }
    });
});
app.listen(port, () => {
    console.log(`Usando el puerto ${port} para este proyecto`);
});
