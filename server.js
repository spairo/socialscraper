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
      var scope = {
				pagehead: "",
				audience: [],
				growing: [],
				top: []
			};

			$('.page-head h1').filter(function(){
        var data = $(this);
				rating = data.text().trim();
        scope.pagehead = rating;
      });

			$(".top-fans-stats .item").each(function(i, item){
				scope.audience.push({
					title: $("h3 span", item).text().trim(),
					totalfans: $("strong", item).text().trim(),
					img: $(".top-fans-stats-img img").attr('src')
				});
			});

			$('.graph-growing-list li').each(function(i, item){
        scope.growing.push({
					title: $("a h3", item).text().trim(),
					growing: $("strong", item).text().trim(),
					//img: $("a .placeholder-img img").attr('src')
				});
			});

			$('.graph-growing-list .block-1 li').each(function(i, item){
        scope.growing.push({
					//title: $("a h3", item).text().trim(),
					//growing: $("strong", item).text().trim(),
					//img: $("a img").attr('src')
				});
			});

			$('.global-and-local .brand-table-placeholder table tr name').each(function(i, item){
				console.log($(".item a").attr('title'));
				console.log($(".item a .placeholder-img img").attr('src'));
      });

			res.send(scope);

    }else{
			res.send({
				opps: 'algo salio mal'
			});
		}
  });
});

app.listen('8081')
console.log('api on port 8081');
exports = module.exports = app;
