const setUpPassport = require("./controllers/passportSetup.js");
const express = require('express');
const path = require('path');
const app = express();
const router = require('./Routes/routes.js');
const bodyParser = require('body-parser');

setUpPassport();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname+'./Views')))
app.use(router);

app.set('port',app.get('port') || 3000);
app.listen(3000,function(){
    console.log('The server start on port'+ app.get('port') );
})

