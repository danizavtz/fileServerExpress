require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
app.disable('x-powered-by');
cors({ credentials: true, origin: true });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', require('./server/index'));

//após tentar casar todas as rotas a ultima rota que sobrou é not found
app.get('*', function(req, res) {
  res.status(404).send('<html><head><style>body {font-family: Helvetica, Arial, Sans-Serif;margin-top: 5em;}h1 {font-size: 3em;}h2 {font-size: 2em}</style></head></body><center><h1>Página não encontrada (Not Found)</h1><h2>(╯°□°）╯︵ ┻━┻</h2><br>O endereço solicitado não foi encontrado nesse servidor.<br>Verifique o url e tente novamente<br><h2>Erro: 404</h2></center></body></html>');
});

module.exports = app;