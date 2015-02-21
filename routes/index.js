exports.index = function(request,response){
    response.render('index',{title:'Project 1'});
};
exports.about = require('./about');
