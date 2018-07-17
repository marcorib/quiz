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




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/quiz.html');
})


// app.get('/orel', function (req, res) {
//   res.send("c'est moi");
// })

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'marco',
  password: '',
  database: 'Quiz'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

 connection.query('SELECT * FROM Questions', function(err, results) {
        if (err) throw err
        console.log(results)
       
      })
});
