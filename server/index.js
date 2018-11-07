const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const request = require('request');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '../', 'public')));
app.get(`/grub-reactor/:menuId/menu`, (req, res) => {
  console.log('hi');
  var menuInfo = {
    host: 'localhost',
    port: 3001,
    path: `/grub-reactor/${req.params.menuId}/menu`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };
  var menuInfo = http.request(menuInfo, (result) => {
    result.on('data', (data) => {
      res.status(200).send(data);
    }).on('error', (err) => {
      res.status(500).send("menu not found");
    });
  });
  menuInfo.end();
});







app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});