module.exports = {
	"index": function(req, res, next){

		var http = require('http');
		var url = "http://feeds.bbci.co.uk/news/england/rss.xml";

		var items = [];
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

					/*var count = 0;
					for(var each in articles){
					    var thisItem = articles[each];

					 	var itemToAdd = {
					 		title: thisItem["title"],
					 		description: thisItem["description"],
					 		image: thisItem["media:thumbnail"][1]["$"]["url"],
					 	};

					    items.push(itemToAdd);

					    console.dir(items);
					    console.log("=== === === === ===");

					    count++;

					    if(count == 5){
					    	break;
					    }
					}*/
			});
		  });
		});

		request.on('error', function(err) {

		});		

		var articles = [
		{
			title: "Title one",
			description: "Description one, yes this is the description.",
			date: "2/3/2011",
			relatedLeft: [{
					title: "related story one a",
				},
				{
					title: "related story one b",
				},
			],relatedRight: [{
					title: "related story one c",
				},
				{
					title: "related story one d",
				},
			],
		},
		{
			title: "Title two",
			description: "Description two, yes this is the description.",
			date: "17/6/2011",
			relatedLeft: [{
					title: "related story two a",
				},
				{
					title: "related story two b",
				},
			],
			relatedRight: [{
					title: "related story two c",
				},
				{
					title: "related story two d",
				},
			],
		},
		{
			title: "Title three",
			description: "Description three, yes this is the description.",
			date: "2/2/2012",
			relatedLeft: [{
					title: "related story three a",
				},
				{
					title: "related story three b",
				},
			],
			relatedRight: [{
					title: "related story three c",
				},
				{
					title: "related story three d",
				},
			],
		},
		{
			title: "Title four",
			description: "Description four, yes this is the description.",
			date: "11/7/2014",
			relatedLeft: [{
					title: "related story four a",
				},
				{
					title: "related story four b",
				},
			],
			relatedRight: [{
					title: "related story four c",
				},
				{
					title: "related story four d",
				},
			],
		},
		{
			title: "Title five",
			description: "Description five, yes this is the description.",
			date: "2/3/2015",
			relatedLeft: [{
					title: "related story five a",
				},
				{
					title: "related story five b",
				},
			],
			relatedRight: [{
					title: "related story five c",
				},
				{
					title: "related story five d",
				},
			],
		},
		];

		res.view({
			articles: articles,
		});

	},
};

