const express = require('express');
const request = require('request');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const configPath = require('./server.config').paths;
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const HTML_FILE = path.join(__dirname, 'dist', 'index.html');
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
const pathKey = Object.keys(configPath);
for (let i = 0; i < pathKey.length; i++) {
  app.use(pathKey[i], (req, res) => {
    if (configPath[pathKey[i]].indexOf('http:') !== -1) {
      const url = `${configPath[pathKey[i]]}${pathKey[i]}${req.url}`;
      req.pipe(request(url)).pipe(res);
    } else {
      const data = require(configPath[pathKey[i]]);
      res.send(data);
    }
  });
}

app.get('*', (req, res) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    res.set('content-type', 'text-html');
    res.send(result);
    res.end();
  });
});

app.listen(3003, () => {
  console.log('app server in 3003');
});
