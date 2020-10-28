const r = require('express').Router();

r.get('/:id?', (req, res) => {
  const { id = 'test' } = req.params;
  res.send(id);
});

module.exports = r;
