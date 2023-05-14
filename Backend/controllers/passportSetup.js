var localStrategy = require('passport-local').Strategy;
var session = require("express-session");
var flash = require("connect-flash");
var cookieParser = require("cookie-parser");

const app = express();
var passport = require("passport")
var bodyParser = require("body-parser");

//..
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
	secret : "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX" /*any random sentenct to encrypt the user cookies*/,
	resave : true,
	saveUninitialized : true
}));


//..
//..

app.use(passport.initialize());
app.use(passport.session());
app.use(flash())