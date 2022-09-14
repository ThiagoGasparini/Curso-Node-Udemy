const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');

//view engine
app.set('view engine', 'ejs'); 

//static
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database
connection
  .authenticate()
  .then(() => {
    console.log('authentication sucess on db');
  })
  .catch((error) => {
    console.log(error);
  })

app.get('/', (_req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log('listening on port 8080');
})