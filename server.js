var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.route('/api/:lang').get((req, res) => {
  const requestedLang = req.params['lang'];

  switch(requestedLang) {
    case 'mx':
      url = 'https://www.socialbakers.com/statistics/facebook/pages/total/mexico/';
      break;
    case 'es':
      url = 'https://www.socialbakers.com/statistics/facebook/pages/total/spain/';
      break;
    case 'us':
      url = 'https://www.socialbakers.com/statistics/facebook/pages/total/united-states/';
      break;
    default:
      res.send({ country: "not data found" });
  }

  request(url, function(err, resp, html){
    if(!err){
      var $ = cheerio.load(html);
      const scope = {
        title: ""
      };

      $('.global-and-local header h2').filter(function(){
        var data = $(this);
        rating = data.text().trim();
        scope.title = rating;
      });

      res.send(scope);
    }
  });
});

app.listen('8081')
console.log('api on port 8081');
exports = module.exports = app;
