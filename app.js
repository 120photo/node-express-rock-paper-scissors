var express = require('express');
var app = express();

app.set('view engine', 'jade');

// list of weapons for rock paper scissors
var weapons = ['rock', 'paper', 'scissors'];

// function that generates computers guess
var computerGuess = function() {
  return weapons[Math.floor(Math.random() * weapons.length)];
};

// counters for games played and keeping track of who won
var plays = 0;
var gameComputer = 0;
var gamePlayer = 0;

// setup a simple root page that outputs computer's guess
app.get('/', function (req, res) {
  // res.send("computer guessed " + computerGuess());
  res.render('index', {title: 'RoShamBo', message: computerGuess()})
});

// routing for player choises of weapons
// and setup basic logic
app.get('/weapons/:name', function(req, res) {
  computer = computerGuess();
  player = req.params.name;
  if (req.params.name === "rock") {
    res.send(req.params.name + " beats scissors");
  } else if (req.params.name === "paper") {
    res.send(req.params.name + " beats rock");
  } else if (req.params.name === "scissors") {
    res.send(req.params.name + " beats paper");
  } else {
    res.send(req.params.name + " is not an option, you lose.");
  }

});

// basic server settings
var server = app.listen(3000, function () {
  console.log('server is listening on port', server.address().port);
});
