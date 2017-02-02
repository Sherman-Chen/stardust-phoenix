'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = (process.env.PORT || 8080);

app.use(express.static('src/public'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/public', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})