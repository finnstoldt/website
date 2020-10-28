const express = require('express');

const { config } = require('./config');

const app = express();

app.use('/api', require('./controllers/api'));

app.listen(config.httpPort, () => {
  console.log(`Server listening to port ${config.httpPort}`);
});
