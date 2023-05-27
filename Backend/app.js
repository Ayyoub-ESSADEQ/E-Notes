const setUpPassport = require("./Utilities/passportSetup.js");
const express = require('express');
const path = require('path');
const app = express();
const router = require('./Routes/routes.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

app.use(flash());
app.set('port',app.get('port') || 3000);


setUpPassport();
app.use(bodyParser.urlencoded({extended:true}))
app.use(router);

app.listen(3000,function(){
    console.log('The server start on port'+ app.get('port') );
})

