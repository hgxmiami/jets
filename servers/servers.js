const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://yoda:yoda@ds031865.mlab.com:31865/jets',(err, database) => {
	if (err) return console.log(err);
	db = database;
	
});
const app = express();
app.use(express.static(__dirname + '/css'));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
   
});

app.get('/jets', (req, res) => {
  db.collection('jets').find().toArray(function(err, results) {
        if (err) return console.log(err);
		/*renders index.ejs*/
		 console.log(results);
		res.render('index.ejs', {jets: results});
});
	});

app.post('/jets', (req, res) => {
	db.collection('jets').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
	db.collection('quotes').find().toArray(function(err, results) {
       console.log(results)
  // send HTML file populated with quotes here
});
	
});
});



MongoClient.connect('mongodb://yoda:yoda@ds031865.mlab.com:31865/jets',(err, database) => {
	if (err) return console.log(err);
	db = database;

app.listen(3000, function() {
	console.log('listening on port 3000..');
	
});
	
});
