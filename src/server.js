const express = require('express');
const server = express();

// Configuração pasta pública
server.use(express.static('public'));

// Template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    // Não guarda cache no navegador
    noCache: true
});

// Rotas
server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/create-point', (req, res) => {
    return res.render('create-point.html');
});

server.get('/search', (req, res) => {
    return res.render('search-results.html');
});

// Inicia o servidor
server.listen(3000);