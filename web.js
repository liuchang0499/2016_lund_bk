var keystone = require('keystone');

keystone.init({

  'name': 'Admin',
  'brand': 'Demo',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',

  'views': 'templates/views',
  'view engine': 'jade',
  'port':'3001',

  'auto update': true,
  'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://dev:biogaslund@ds047146.mlab.com:47146/2017lund/keystone-demo',
  'cloudinary config': 'cloudinary://974719199753275:BUXgG7yf44HkWhBkH6mAQe9vMo0@dy8kdozhn',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'demo',

  'ga property': process.env.GA_PROPERTY,
  'ga domain': process.env.GA_DOMAIN,

  'chartbeat property': process.env.CHARTBEAT_PROPERTY,
  'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.import('models');

keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
  ga_property: keystone.get('ga property'),
  ga_domain: keystone.get('ga domain'),
  chartbeat_property: keystone.get('chartbeat property'),
  chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'posts': ['posts', 'post-comments', 'post-categories'],
  'galleries': 'galleries',
  'users': 'users',
  'field-tests': 'things'
});




keystone.start();
