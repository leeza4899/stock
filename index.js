//require all the basic packages
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var request = require("request");


const PORT = process.env.PORT || 5000;

// use body parser middleware

app.use(bodyParser.urlencoded({extended: false}));





//pk_062031d20883444f9ea74e2610fe2011

//create call_api function

function call_api(finishedAPI, ticker) {

	request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_062031d20883444f9ea74e2610fe2011', { json: true }, (err, res, body) => {

	if (err) {return console.log(err);}

	if (res.statusCode === 200){

		//console.log(body);

		finishedAPI(body);

		};

	});

};



// Set Handlebars Middleware

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');



// Set handlebar index GET route
app.get('/', function (req, res) {

	call_api(function(doneAPI) {

			res.render('home', {

	    	stock: doneAPI,

    	});

	}, "fb");

});


// Set handlebar index POST route

app.post('/', function (req, res) {

	call_api(function(doneAPI) {
			res.render('home', {
	    	stock: doneAPI
    	});
	}, req.body.stock_ticker);
});



// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Listen port 
app.listen(PORT, process.env.IP, function(req,res){
	console.log("server begun!");
});