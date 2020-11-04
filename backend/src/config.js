require('dotenv').config();

const config = {
  httpPort: process.env.HTTP_PORT || 4000,
  contact: {
    firstName: process.env.CONTACT_FIRST_NAME || 'Max',
    lastName: process.env.CONTACT_LAST_NAME || 'Mustermann',
    email: process.env.CONTACT_EMAIL || 'placeholder@email.de',
    phone: process.env.CONTACT_PHONE || '+49 1234 56789',
    url: process.env.CONTACT_URL || 'www.example.com',
  },
};

module.exports = { config };
