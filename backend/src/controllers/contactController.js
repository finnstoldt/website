const r = require('express').Router();
const { config } = require('../config');
const { vCard } = require('../util/vCard');

r.get('/vcard', (req, res) => {
  // set content-type and disposition including desired filename
  res.set(
    'Content-Type',
    `text/vcard; name="${config.contact.firstName}${config.contact.lastName}.vcf"`,
  );
  res.set(
    'Content-Disposition',
    `inline; filename="${config.contact.firstName}${config.contact.lastName}.vcf"`,
  );

  // send the response
  return res.send(vCard.getFormattedString());
});

module.exports = r;
