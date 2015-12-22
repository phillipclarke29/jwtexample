var express = require('express');
var jwt = require('jwt-simple');
var app = express();
app.use(require('body-parser').json());

var secretKey = 'supersecretkey'

app.post('/session', function(req, res){
  console.log(req);
 var username = req.body.username;
 var token = jwt.encode({username: username}, secretKey)
 res.json(token)
})

app.get('/user', function(req, res){
    console.log(secretKey);
 var token = req.headers['x-auth']
 var user =jwt.decode(token, secretKey)
 console.log(user);
 res.json(user)
})

app.listen(3000)
