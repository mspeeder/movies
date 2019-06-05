var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const path = require('path') 

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/models/movie.js');
require('./server/config/routes.js')(app);

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function() {
    console.log("listening on port 8000!")
})