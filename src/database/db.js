// Importa a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose();

// Cria o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

// Exporta o arquivo
module.exports = db;