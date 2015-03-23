/**
 * Stage1Controller
 *
 * @description :: Server-side logic for managing stage1s
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	"index": function(req, res, next){

		var http = require('http');
		var url = "http://feeds.bbci.co.uk/news/england/rss.xml";
		var request = http.get(url, function(result) {
		  // save the data
		  var xml = '';
		  result.on('data', function(chunk) {
		    xml += chunk;
		  });

		  result.on('end', function() {
		    var parseString = require('xml2js').parseString;
				parseString(xml, function (err, result) {
					var data = JSON.parse(JSON.stringify(result));
					var articles = data["rss"]["channel"][0]["item"];
					for(var each in articles){
					    
					    var thisItem = articles[each];

					    console.log("TITLE:" + thisItem["title"]);
					    console.log("DESC:" + thisItem["description"]);
					    console.dir(thisItem["media:thumbnail"][0]["$"]["url"]);
					    console.dir(thisItem["media:thumbnail"][1]["$"]["url"]);
					    console.log("=== === === === === === ===");
					}
			});
		  });
		});

		request.on('error', function(err) {

		});

		

		var toView = {};
		res.view(toView);
	},
};

