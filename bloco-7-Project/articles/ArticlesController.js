const express = require('express');
const router = express.Router();

router.get('/articles', (_req, res) => {
  res.send('rota de artigos');
});

module.exports = router;