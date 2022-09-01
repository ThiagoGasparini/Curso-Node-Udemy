const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.render('index')
});

app.get('/perguntar', (_req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  res.send(`formulário recebido! titulo: ${titulo}, descricao: ${descricao}`);
});

app.listen(8080, () => {
  console.log('listening on');
})