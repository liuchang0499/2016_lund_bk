import express from 'express';
import browserify from 'browserify-middleware';
// import sassMiddleware from 'node-sass-middleware';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import { fromNode } from 'creed';
import fs from 'fs';
import shortid from 'shortid';
import http from 'http';
import path from 'path';
// import passport from 'passport';
// import flash from 'connect-flash';
// var LocalStrategy = require('passport-local').Strategy;
// import Account from './models/account';

const app = express();
const server = http.createServer(app);

app.set('DEV', process.env.NODE_ENV !== 'production');

app.set('PORT', process.env.PORT || 3000);
// const dbConnect = process.env.DB_CONN || 'mongodb://localhost:27017/lund';
// mongoose.connect(dbConnect);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// var Cat = mongoose.model('Cat', { name: String ,gender: String});
// var Test= mongoose.model('Test',{demo:String});

// app.post('/add',function(req,res){

//   var kitty = new Cat({ name: 'Zildjian',gender:'male' });
//   kitty.save(function (err) {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     } else {
//       res.status(200).send('OK');
//     }
//   });

// })
//test
// app.post('/api/input',function(req,res){
//   req.on('data',function(data){
//      console.log('data：　'+decodeURIComponent(data));
//      var Lucy = new Test({ demo:data});
//      Lucy.save(function(err){
//       if(err){
//         console.log(err);
//       res.status(500).send(err);
//     }else{
//       res.status(200).send('done');
//     }

//      })

//   });
//   req.on('end',function(){
//     console.log('end');
//   });
//   res.end();

// })



// BioEquipment model constructor
// const BioEquipment = mongoose.model('BioEquipment', {
//   id: String,
//   fields: {
//     a: Boolean,
//     b: Boolean,
//     c: Boolean,
//     d: Boolean,
//   },
//   brandName: { type:String, unique: true },
//   equipmentAccessories: {
//     a: [Number],
//     b: [Number],
//     c: [Number],
//     d: [Number]
//   }
// });

// // get all
// app.get('/addbrand', function(req, res){
//   const bioequ = new BioEquipment({
//     id: shortid.generate(),
//     fields: {
//       a: true,
//       b: true,
//       c: true,
//       d: false
//     },
//     brandName: 'lund',
//     equipmentAccessories: {
//       a: ['0'],
//       b: ['1'],
//       c: ['2'],
//       d: ['3']
//     }
//   });

//   bioequ.save(function(err){
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send('OK');
//     }
//   });
// });

// // Order model constructor
// const Order = mongoose.model('Order', {
//   id: String,
//   contact: String,
//   phone: String,
//   email:String,
//   company:String,
//   department:String,
//   area:String,
//   address:String,
//   comment:String
// });

// // submitorder
// app.get('/api/submitorder', function(req, res) {
//   const order = new Order({
//     id: shortid.generate(),
//     contact: '2',
//     phone: '2',
//     email:'2',
//     company:'2',
//     department:'2',
//     area:'2',
//     address:'2',
//     comment:'2'
//   });

//   order.save(function(err){
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send('OK');
//     }
//   });
// });



// app.get('/api/brands', function(req, res) {
//   BioEquipment.find({}, function(err, data){
//     if (err) {
//       res.send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// });

// app.get('/fieldsA', function(req, res) {
//   BioEquipment.find({'fields.a':true}, function(err, data){
//     if (err) {
//       res.send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// });

// const Article = mongoose.model('Article', {
//   id: { type: String, unique: true },
//   name: String,
//   content: String,
//   imgUrl: [String],
//   onHomePage: Number,
//   onShowPage: Number,
//   createTime: String,
//   updateTime: String,
//   visitedTimes: Number,
//   thumbsUp : Number,
//   thumbsDown: Number
// });

const config = {
  index: 'index.html',
  dotfiles: 'ignore',
  // http://stackoverflow.com/a/500103/1737413
  etag: false,
  maxage: -1
};

app.use((req, res, next) => {
  // console.log(`${req.method} : ${req.path}`);
  next();
});


// sass middleware
// app.use(
//   sassMiddleware({
//     src: join(__dirname, '../sass'),
//     dest: join(__dirname, '../public/css'),
//     prefix: '/css',
//     debug: app.get('DEV'),
//     outputStyle: 'compressed'
//   })
// );

// http://evanhahn.com/express-dot-static-deep-dive/
app.use(express.static(join(__dirname, '../public'), config));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());
// app.use(flash());
// app.post('/api/register', function(req, res) {
//     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
//         if (err) {
//             res.status(500).json(err);
//         }

//         passport.authenticate('local')(req, res, function () {
//             // res.status(200).send('OK,in');
//         });
//     });
// });

// app.post('/api/login', passport.authenticate('local'), function(req, res) {
//   if (req.isAuthenticated()){
//     res.status(200).send("you are in!");
//   } else {
//     res.status(200).send("try one more time!");
//   }
// });

// app.post('/api/me', function(req, res){
//   res.status(200).json({'alive': req.isAuthenticated()});
// });

// app.post('/api/logout', function(req, res){
//   req.session.destroy();
// });



// route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {

//   // if user is authenticated in the session, carry on
//   if (req.isAuthenticated())
//     return next();

//   // if they aren't redirect them to the home page
//   res.redirect('/');
// }

// babel options
const babel = {
  presets: ['es2015', 'react'],
  plugins: ['react-html-attrs', ["import", {
    "libraryName": "antd",
    "style": "css",   // or 'css'
  }]]
};

// browserify transforms
const transform = [
  ['babelify', babel],
  ['cssify', { global: true }]
];

// Serve bundle to client.
// https://github.com/ForbesLindesay/browserify-middleware/issues/31
app.get('/js/bundle.js', browserify(join(__dirname, '../client/index.js'), {
  transform,
  debug: true,
  cache: 'dynamic',
  precompile: true,
  insertGlobals: true
}));

app.all('*', function(req, res){
  res.sendFile('index.html', { 'root': path.resolve(__dirname, '../public') });
});

// db.once('open', function(callback) {
//   console.info('App Server - DB connected');
// });
server.listen(app.get('PORT'), function callback() {
  return console.log(`application started on port ${app.get('PORT')}`);
});