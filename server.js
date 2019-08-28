// server.js

// init project
var express = require('express');
var app = express();
var OAuth = require('oauth');

var KEY = process.env.TNP_KEY;
var SECRET = process.env.TNP_SECRET;


var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0',
	null,
	'HMAC-SHA1'                                                                                                                       
)

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});


app.get("/icon", function(request, response) {
  const randId = Math.floor(Math.random() * 500 + 1)
  oauth.get(
    `http://api.thenounproject.com/icon/${randId}`,
    null,
    null,
    function(e, data, res) {
      if (e) {
        console.error(e);
        response.status(404).send({ error: true })
      } else {
        response.send({ error: false, data: JSON.parse(data)})
      }
    }
  )
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
