const config = {
  contact: {
    name: process.env.REACT_APP_CONTACT_NAME || 'Max Mustermann',
    email: process.env.REACT_APP_CONTACT_EMAIL || 'placeholder@email.de',
    phone: process.env.REACT_APP_CONTACT_PHONE || '+49 1234 56789',
    street: process.env.REACT_APP_CONTACT_STREET || 'Musterstraße',
    zip: process.env.REACT_APP_CONTACT_ZIP || '12345',
    city: process.env.REACT_APP_CONTACT_CITY || 'Musterstadt',
  },
};

export { config };
