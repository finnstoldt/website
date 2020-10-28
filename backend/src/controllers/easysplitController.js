const r = require('express').Router();

const { easysplit } = require('../core/easysplit');

r.post('/calculate', (req, res) => {
  return res.send(easysplit.calculate(req.body));
});

module.exports = r;
