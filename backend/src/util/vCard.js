const vCardsJS = require('vcards-js');
const { config } = require('../config');

// create a new vCard
const vCard = vCardsJS();

// set properties
vCard.firstName = config.contact.firstName;
vCard.lastName = config.contact.lastName;
vCard.workPhone = config.contact.phone;
vCard.email = config.contact.email;
vCard.url = config.contact.url;

module.exports = { vCard };
