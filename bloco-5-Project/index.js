const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

connection
  .authenticate()
  .then(() => {
    console.log('conexão feita com o BD');
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  Pergunta.findAll({ raw: true, order: [
    ['id', 'DESC']
  ] }).then((perguntas) => {
    res.render('index', {
      perguntas: perguntas,
    })
  })
});

app.get('/perguntar', (_req, res) => {
  res.render('perguntar');
});

app.get('/pergunta/:id', (req, res) => {
  const { id } = req.params;
  Pergunta.findOne({
    where: {id: id}
  }).then((pergunta) => {
    if (pergunta !== undefined) {
      Resposta.findAll({
        where: {perguntaId: pergunta.id},
        order: [
          ['id', 'DESC']
        ]
      }).then((respostas) => {
        res.render('pergunta', {
          pergunta: pergunta,
          respostas: respostas
        })
      })
    } else {
      res.redirect('/')
    }
  });
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  })
});

app.post('/responder', (req, res) => {
  let corpo = req.body.corpo;
  let perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect('/pergunta/' + perguntaId);
  });
});


app.listen(8080, () => {
  console.log('listening on');
})