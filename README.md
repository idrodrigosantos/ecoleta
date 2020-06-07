# Ecoleta
Sistema para cadastro e consulta de locais de coleta de resíduos.

## Softwares necessários

* Editor de código-fonte
* Node.js
* Git

## Instalação

```bash
# Clone o repositório
$ git clone https://github.com/imsantosrodrigo/ecoleta.git

# Acesse o diretório
$ cd ecoleta

# Instale as dependências
$ npm install

# Crie o banco de dados
$ node src/database/create-database.js
```

## Executando o sistema

```bash
# Inicie o servidor
$ npm start
```

No navegador acesse o endereço:

```
http://localhost:3000/
```

## Tecnologias

* HTML
* CSS
* JavaScript
* Node.js
* SQLite

## API

* [API de serviço de dados do IBGE](https://servicodados.ibge.gov.br/api/docs)

## Dependências

* [Express](https://github.com/expressjs/express)
* [Nunjucks](https://github.com/mozilla/nunjucks)
* [SQLite3](https://github.com/mapbox/node-sqlite3)

## Dependência de desenvolvimento

* [Nodemon](https://github.com/remy/nodemon)