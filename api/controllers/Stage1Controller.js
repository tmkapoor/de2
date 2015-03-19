/**
 * Stage1Controller
 *
 * @description :: Server-side logic for managing stage1s
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	"index": function(req, res, next){
		var toView = {};
		res.view(toView);
	},
};

