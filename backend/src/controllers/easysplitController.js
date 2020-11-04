const r = require('express').Router();
const { easysplit } = require('../util/easysplit');

r.post('/calculate', (req, res) => res.send(easysplit.calculate(req.body)));

module.exports = r;
