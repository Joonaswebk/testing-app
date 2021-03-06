const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
var status;
var website_url;

app.get('/', (req, res) => {
  res.send({status: status, website_url:website_url});
});

app.get('/get_status', (req, res) => {
  status = req.query.status;
  website_url = req.query.website_url;
  console.log(status, website_url);
  res.send({status: status, website_url:website_url});
});

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});