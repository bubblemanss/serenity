var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var file_dir = __dirname + "/data.txt";
var html_dir = __dirname + "/test.html";
var name, email, message, date, submit;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.set('view engine' , 'ejs');
app.set('view' , path.join(__dirname, 'views'));


app.post('/', function(req, res) {
	name = req.body.dname;
    email = req.body.demail;
	date = req.body.ddate;
	message = req.body.dmessage;
	var storestring = JSON.stringify(req.body)+"|";
	fs.appendFile(file_dir, storestring, function(err){
		if(err) {
        res.send(err);
		} else {
        //res.send("sucess");	
		}
	});
	var jsonarray;
	
	fs.readFile(file_dir, "utf8",function(err, data){
		if(err) {
        res.send("hi");
		} else {
		jsonarray = (data).split('|');
		 res.send ("DATA HAS BEEN SUCCESSFULLY STORED! THIS IS DATA: " + jsonarray);
		}});	
	//var htmlstring = '<html><head><title>SafeSpace</title></head><body><div class="jumbotron"><div id="main"><h1>SafeSpace</h1><hr><h3>hey</h3> <div id="form_final"></div></div> <!-- include JavaScript file here --><script type="text/javascript" src="index.js"></script>	<script type="text/javascript" src="finalform.js"></script>	<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>	<!-- second div for our Fugo from FomGet.com--><!--<div id="fugo"><a href="http://www.formget.com/app/"><img src="images/formGetadv-1.jpg" /></a> </div>--></body></html>';
	//setTimeout(window.open(), 1000);
	//res.sendFile(html_dir);
	//res.send(htmlstring);
});


var server = app.listen(3000, "127.0.0.1",{}, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


