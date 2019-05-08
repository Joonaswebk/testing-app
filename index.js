const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());


app.get('/get_status', (req, res) => {
  var status = req.query.status;
  var website_url = req.query.website_url;
  console.log(status, website_url);
  res.send({status: status, website_url:website_url});
});

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});