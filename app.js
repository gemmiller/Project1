var express = require('express');
var routes = require('./routes');

var app = express();
app.set('views',__dirname+'/views');
app.set('view engine','jade');

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/',routes.index);

app.listen(app.get('port'),function(){
    console.log("Node app is running at localhost:" + app.get('port'));
});
