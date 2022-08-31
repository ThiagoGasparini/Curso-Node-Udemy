const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
  // let nome  = 'Thiago Gasparini';
  // let lang = 'JavaScript';
  let exibeMsg = true;
  res.render('index', {
    nome: req.params.nome,
    lang: req.params.lang,
    empresa: 'Guia do Programador',
    inscritos: 8000,
    msg: exibeMsg,
  })
});

app.get('/home', (_req, res) => {
  res.render('home')
});

app.listen(8080, () => {
  console.log('listening on');
})