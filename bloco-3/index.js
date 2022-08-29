const express = require('express');

const app = express();
const PORT = '3000';

app.get("/",function(req,res){
  res.status(200).send("<h1>Bem vindo ao guia do programador!!!</h1>");
});

app.get("/blog/:artigo?", (req, res) => {
  const { artigo } = req.params;
  if(artigo) {
    return res.status(200).send(`<p>Bem vindo ao meu blog do artigo ${artigo}</p>`)
  }
  return res.status(200).send(`<p>Bem vindo ao meu blog</p>`)
  
})

app.get("/canal/youtube", (req, res) => {
  const { canal } = req.query;
  if (canal) {
    return res.status(200).send(`<p>Bem vindo ao canal "${canal}"</p>`)
  }
  return res.status(200).send(`<p>Bem vindo ao youtube</p>`)
})

app.get("/ola/:nome/:empresa", (req, res) => {
  const { nome, empresa } = req.params;
  res.status(200).send(`Funcionário ${nome} trabalhava na empresa: ${empresa}`)
})

app.listen(PORT, (error) => {
  if(error) {
    return console.log("Ocorreu um erro no servidor");
  } else {
    return console.log("Servidor iniciado com sucesso");
  }
})

