var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/testing', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

var apikey = require('./apikey').apikey;
var MARVEL_API = 'https://gateway.marvel.com/v1/public';

// 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=73d781f8f57972356e08d844d2d317ac&hash=b9607c3d076294ec15fcf9c16522f8a5'

app.get('/:cat', function(req, res){
  // var category = req.query.cat;
  // var searchTerm = req.query.searchTerm;

  var url = MARVEL_API + req.url + apikey;

  request(url, function(error, response, body){
    res.send(body);
  });
});

app.get('/:cat/:id', function(req, res){
  // var category = req.query.cat;
  // var searchTerm = req.query.searchTerm;

  var url = MARVEL_API + req.url + apikey;

  request(url, function(error, response, body){
    res.send(body);
  });
});

// app.use('/', function(req, res) {
//   var url = MARVEL_API + req.url + "?"+ apikey;
//   req.pipe(request(url)).pipe(res);
// });

// The request to Marvel looks like this:
// v1/public/*search string*/*itemid*
// the item ID is optional, and it returns a specific item



/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');


/* BreweryDB API Example */

// app.get('/api', function(req, res){ // listens for request on /api route
//   var lat = req.query.lat; // grabs lat and lng queries from the request object
//   var lng = req.query.lng;
//   request('https://api.brewerydb.com/v2/search/geo/point?lat=' + lat + '&lng=' + lng + '&type=beer&hasImages=Y&key=72a751214ab8b53056ac0a6d8376dc2d', function (error, response, body) { // api url
//     if (!error && response.statusCode === 200) {
//       console.log('beer');
//       res.send(body); // if no errors, send the body of data back to front end
//     }
//    });
// });
