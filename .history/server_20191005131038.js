const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load env
dotenv.config({ path: './config.env' });

const app = express();

const port = process.env.PORT || 8000;

app.listen(5000, () => {
  console.log('Ápp listening on port 5000!');
});