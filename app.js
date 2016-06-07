var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    port        = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function(req, res, next) {
    // do logging
    console.log('This is sample middleware for all routes');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res){
  res.send("<h1>Hello world</h1>");
})

app.use('/', router);

app.listen(port,function(){
  console.log('Listening on Port: ', port);
})
