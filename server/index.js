

const bodyParser = require('body-parser');
const express    = require('express');
const cors = require('cors');
const app = express();



const httpProxy  = require('http-proxy');
const proxy   = httpProxy.createProxyServer();
const PORT = 3000;
app.use(cors());

const chris_banner = 'http://ec2-54-193-75-21.us-west-1.compute.amazonaws.com';
const simon_menu = 'http://ec2-52-43-228-173.us-west-2.compute.amazonaws.com';
const ash_carasul = 'http://ec2-13-57-220-156.us-west-1.compute.amazonaws.com';
var emily_review = 'http://ec2-34-221-253-114.us-west-2.compute.amazonaws.com';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/grubhub/:rest_id', express.static('public'));

app.get("/restaurants/banners/:rest_id", function(req, res) {

  proxy.web(req, res, {target: chris_banner});
});

app.get("/grub-reactor/:rest_Id/menu/*", function(req, res) {

  proxy.web(req, res, {target: simon_menu});
});

app.all("/restaurant/:id", function(req, res) {

  proxy.web(req, res, {target: ash_carasul});
});

app.all("/grubhub/:rest_id/allreviews/*", function(req, res) {

  proxy.web(req, res, {target: emily_review});
});

app.listen(PORT, () => {
  console.log(`server listening on...  ${PORT}`);
});