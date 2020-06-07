// Importa a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose();

// Cria o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);
});