const r = require('express').Router();
const { vCard } = require('../util/vCard');

r.get('/vcard', (req, res) => {
  // set content-type and disposition including desired filename
  res.set('Content-Type', 'text/vcard; name="contact.vcf"');
  res.set('Content-Disposition', 'inline; filename="contact.vcf"');

  // send the response
  return res.send(vCard.getFormattedString());
});

module.exports = r;
