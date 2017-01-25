'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = (process.env.PORT || 5294);

app.use(express.static('src/client'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/client', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
