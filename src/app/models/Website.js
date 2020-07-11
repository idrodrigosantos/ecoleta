// Importa a conexão com o banco de dados
const db = require('../../config/db');

module.exports = {
    // Cadastra local
    create(data, callback) {
        const query = `
            INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `;

        const values = [
            data.image,
            data.name,
            data.address,
            data.address2,
            data.state,
            data.city,
            data.items
        ];

        db.query(query, values, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }

            callback(results.rows[0]);
        });
    },
    // Pesquisa lugar
    search(params) {
        const { filter, callback } = params;

        let query = '';
        let filterQuery = '';

        if (filter) {
            filterQuery = `WHERE places.city ILIKE '%${filter}%'`;
        }

        query = `SELECT * FROM places ${filterQuery}`;

        db.query(query, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }

            callback(results.rows);
        });
    }
}