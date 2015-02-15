var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.set('view engine' , 'ejs');
app.set('view' , path.join(__dirname, 'views'));

app.post('/', function(req, res) {

    var name = req.body.name,
        color = req.body.color;
   
	res.send(req.body);
});


app.get('/room', function (req, res) {
	//Callback function
	//res.send('swag!!!!!');
	console.log('working');
	//res.render('outdex')
});



var server = app.listen(3000, "127.0.0.1",{}, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


