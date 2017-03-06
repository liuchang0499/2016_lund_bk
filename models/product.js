var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Products', // dan shu biao qian
	singular: 'Product', //shuang shu biaoqian
});

Product.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	price:{ type: Types.Number }
});

Product.track = true;
Product.defaultSort = 'name';
Product.defaultColumns = 'name, publishedDate';
Product.register();
