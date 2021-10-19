require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./database/index');
require('./jobs/deal');
const routes = require('./routes');

const app = express();

connectToDatabase();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server on');
});
