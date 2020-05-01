//require all the basic packages
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var path = require("path");


const PORT = process.env.PORT || 5000;





//set handlebar middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//=================ROUTES==============//
//====================================//
app.get("/", function(req,res){
	res.render("home");
});















//set static folder
app.use(express.static(path.join(__dirname,'public')));


//Listen port 
app.listen(PORT, process.env.IP, function(req,res){
	console.log("server begun!");
});