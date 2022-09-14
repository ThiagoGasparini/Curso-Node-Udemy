const express = require('express');
const router = express.Router();

router.get('/categories', (_req, res) => {
  res.send('rota de categorias');
});

module.exports = router;