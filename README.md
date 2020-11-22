# Ecoleta
Sistema de coleta de resíduos.

## Softwares necessários

* Editor de código-fonte
* Node.js
* PostgreSQL
* Git

## Instalação

```bash
# Clone o repositório
$ git clone https://github.com/idrodrigosantos/ecoleta.git

# Acesse o diretório
$ cd ecoleta

# Instale as dependências
$ npm install
```

## Criação do banco de dados
No PostgreSQL execute o arquivo `ecoleta.sql` em `database/ecoleta.sql` para criar o banco de dados e tabelas.

Acesse o arquivo `db.js` em `src/config/db.js` e configure o usuário e senha de conexão com o PostgreSQL.

```js
module.exports = new Pool({
    // user: 'Usuário PostgreSQL',
    // password: 'Senha PostgreSQL',    
    host: 'localhost',
    port: 5432,
    database: 'ecoleta'
});
```

## Executando o sistema

```bash
# Inicie o servidor
$ npm start
```

## Tecnologias

* HTML
* CSS
* JavaScript
* Node.js
* PostgreSQL
* Nunjucks
* Express.js

## API

* [API de serviço de dados do IBGE](https://servicodados.ibge.gov.br/api/docs)

## Dependências

* [Express](https://github.com/expressjs/express)
* [Nunjucks](https://github.com/mozilla/nunjucks)
* [node-postgres](https://github.com/brianc/node-postgres)

## Dependências de desenvolvimento

* [Browsersync](https://github.com/BrowserSync/browser-sync)
* [Nodemon](https://github.com/remy/nodemon)
* [npm-run-all](https://github.com/remy/nodemon)
