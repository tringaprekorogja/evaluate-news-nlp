const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });




const app = express()

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/sentiment', function (req, res) {
    textapi.sentiment({
        url:'https://www.theguardian.com/world/2020/mar/16/coronavirus-symptoms-should-i-see-doctor-cough-covid-19',
        mode: 'document'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response)
        }
      });
   
})
