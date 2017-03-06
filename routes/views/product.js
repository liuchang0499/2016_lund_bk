var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'product';

	view.query('products', Product.model.find().sort('sortOrder'));

	view.render('product');

}
