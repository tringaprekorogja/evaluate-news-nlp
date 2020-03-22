const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });



const app = express()

app.use(cors())

app.use(express.static('/dist'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


app.post('/sentiment', function (req, res) {
  console.log (req.body);
  textapi.sentiment({
    url: req.body.url,
    mode: 'document'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  })
 });
   

