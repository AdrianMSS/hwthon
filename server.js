/**
* @description Module and archives used by the server
* @author Adrián Sánchez <sesamaua@gmail.com>
*/


var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
 
var app = express();

 
app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser());
app.use(express.static(__dirname+'/webpage'));

app.get('*', function (req, res) {
    res.redirect('../#home', 404);
});

// Listening port
var port = Number(process.env.PORT || 9000);
app.listen(port);
console.log('Listening on port ' + port + '...');
