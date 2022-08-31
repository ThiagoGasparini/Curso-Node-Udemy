const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
  // let nome  = 'Thiago Gasparini';
  // let lang = 'JavaScript';
  let exibeMsg = true;
  let produtos = [
    {nome: 'doritos', preco: 3.14},
    {nome: 'coca-cola', preco: 5.20},
    {nome: 'Leite', preco: 2.50},
  ];
  res.render('index', {
    nome: req.params.nome,
    lang: req.params.lang,
    empresa: 'Guia do Programador',
    inscritos: 8000,
    msg: exibeMsg,
    produtos: produtos,
  })
});

app.get('/home', (_req, res) => {
  res.render('home')
});

app.listen(8080, () => {
  console.log('listening on');
})