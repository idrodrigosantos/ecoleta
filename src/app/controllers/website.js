// Importa o modelo
const Website = require('../models/Website');

module.exports = {
    // Index
    index(req, res) {
        return res.render('index');
    },
    // Página de cadastro
    create(req, res) {
        return res.render('create');
    },
    // Cadastra local
    post(req, res) {
        // Validação dos campos
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Por favor, preencha todos os campos.');
            }
        }

        Website.create(req.body, function (place) {
            // return res.redirect(`/admin/recipes/${recipe.id}`);
            return res.redirect(`/`);
        });
    },
    // Pesquisar lugar
    search(req, res) {
        let { filter } = req.query;

        const params = {
            filter,

            callback(places) {
                return res.render('search', { places, filter });
            }
        }

        Website.search(params);
    }
}