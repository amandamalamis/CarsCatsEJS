// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
// console.log("Let's find out what app is", app);

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
   response.render("main");
})

app.get('/form', function(request, response) {
  response.render("form");
})

app.get('/cars', function(request, response) {
  response.render("cars");
})

app.get('/cats', function(request, response) {
  response.render("cats");
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

