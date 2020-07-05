// Configuração de rotas
const express = require('express');
const routes = express.Router();

// Importa os controllers
const website = require('./app/controllers/website');

// Rotas
routes.get('/', website.index);
routes.get("/cadastro", website.create);
routes.post("/", website.post);
routes.get("/pesquisa", website.search);

// Exporta o arquivo
module.exports = routes;