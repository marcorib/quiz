var express = require('express')
// var bodyParser = require('body-parser');
var app = express();


app.use(express.static('public')); // fonction pour relier le HTML 

app.listen(3300, function () 
{ 
  console.log('Example app listening on port 3300!')
});


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));




// app.get('/', function (req, res) {
//   res.send()
// })
