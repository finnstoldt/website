const express = require('express');
const bodyParser = require('body-parser');

const { config } = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/easysplit', require('./controllers/easysplitController'));

app.use('/contact', require('./controllers/contactController'));

app.listen(config.httpPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening to port ${config.httpPort}`);
});
