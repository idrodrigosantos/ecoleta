const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

// Importa o banco de dados
const db = require('./database/db');

// Configuração pasta pública
server.use(express.static('public'));

// Habilita o uso do req.body
server.use(express.urlencoded({ extended: true }));

// Configuração nunjucks
server.set('view engine', 'njk');
nunjucks.configure('src/views', {
    express: server,
    // Não faz cache no navegador
    noCache: true
});

// Rotas
server.get('/', (req, res) => {
    return res.render('index');
});

server.get('/create-point', (req, res) => {
    return res.render('create-point');
});

server.post('/save-point', (req, res) => {
    // Insere os dados no banco de dados

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send('Erro no cadastro.');
        }

        return res.render('create-point', { saved: true });
    }

    db.run(query, values, afterInsertData);

});

server.get('/search', (req, res) => {
    const search = req.query.search;

    if (search == '') {
        // Mostra a página com os dados
        return res.render('search-results', { total: 0 });
    }

    // Consulta os dados no banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err);
        }

        // Conta a quantia de elementos no array
        const total = rows.length;

        // Mostra a página com os dados
        return res.render('search-results', { places: rows, total: total });
    });
});

// Inicia o servidor
server.listen(5000, function () {
    console.log("Server is running.");
});