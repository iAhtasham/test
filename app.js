const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Azure!!! v2');
});

app.get('/crash', (req, res) => {
  if (true){
    process.exit(1);
  }
  res.send('crashed!!!');
});


app.get('/c', (req, res) => {
  if (true){
    throw new Error();
  }
  res.send('crashed!!!');
});


app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
