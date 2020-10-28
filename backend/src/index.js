const express = require('express');
const bodyParser = require('body-parser');

const { config } = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/easysplit', require('./controllers/easysplitController'));

app.listen(config.httpPort, () => {
  console.log(`Server listening to port ${config.httpPort}`);
});
