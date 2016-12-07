var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/*', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});



app.listen(8080);
console.log("App listening on port 8080");
