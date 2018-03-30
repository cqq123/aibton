
const express = require('express');
const request = require('request');
const path = require('path');
const configPath = require('./server.config').paths;

const app = express();

const pathKey = Object.keys(configPath);
for (let i = 0; i < pathKey.length; i++) {
  app.use(pathKey[i], (req, res) => {
    const url = `${configPath[pathKey[i]]}${pathKey[i]}${req.url}`;
    req.pipe(request(url)).pipe(res);
  });
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/bus', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/taxi', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/bicycle', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/:name', (req, res) => {
  const options = {
    root: path.resolve(__dirname, 'dist'),
  };
  const fileName = req.params.name;
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log(err, '-----------------------err');
      res.status(err.status).end();
    } else {
      console.log('sent:', fileName, '-------------------');
    }
  });
});

app.listen(3004, () => {
  console.log('app server in 3004');
});

