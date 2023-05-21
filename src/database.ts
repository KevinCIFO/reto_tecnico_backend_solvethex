import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('database.db')

db.on('open', () => {
    console.log('La conexión ha sido exitosa')
})

db.on('error', () => {
    console.log('La conexión ha fallado')
})

db.run(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL
    )    
`, (error) => {
    if(error) {
        console.error('Error al crear la tabla users: ', error)
    } else {
        console.log('Tabla users creada correctamente')
    }
})

export default db