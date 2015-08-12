'use-strict';
var host = "54.169.131.194",
port = "8011";


/*
 * Module dependencies.
*/

express = require('express')
  , http = require('http')
  , path = require('path')
  , serveStatic = require('serve-static')
  , awsInit = require('./lib/awsPost');

/*
 * Read Data
 */


var app = express();

// all environments
//console.log(__dirname);
app.use(serveStatic(__dirname + '/public'));
app.set('port', process.env.PORT || port);


app.get("/", awsInit.Process);
app.get("/getData", awsInit.getProcess);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
