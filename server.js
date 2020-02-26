var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use('/static', express.static(__dirname + '/public/google'));

app.get('/', function(req, res){
    res.send('Hello World');
});