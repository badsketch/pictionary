// server.js

// init project
var express = require('express');
var app = express();
var NounProject = require('the-noun-project');

var KEY = process.env.TNP_KEY;
var SECRET = process.env.TNP_SECRET;

var nounProject = new NounProject({
  key: KEY,
  secret: SECRET
})
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});


app.get("/icon", function(request, response) {
  const randId = Math.floor(Math.random() * 1000)
  nounProject.getIconById(randId, function(err, data) {
    if (!err) {
      response.send({ error: false, data: data })
    }
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
