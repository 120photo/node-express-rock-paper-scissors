var express = require('express');
var app = express();

app.set('views', __dirname+'/views');
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
  res.render('index', {
    title: 'RoShamBo',
    message: 'Play the game by choosing your weapon...',
    scorePlayer: gamePlayer,
    scoreComputer: gameComputer
  });
});

// routing for player choises of weapons
// and setup basic logic
app.get('/weapons/:name', function(req, res) {
  computerDraw = computerGuess();
  player = req.params.name;
  // player chooses rock
  if (req.params.name === "rock") {
    if (computerDraw === "rock" ) {
      res.render('game_play', {
        message: "Computer Drew Rock - Draw, No Points",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
    } else if ( computerDraw === "paper") {
      res.render('game_play', {
        message: "Computer Drew Paper - Your Lose",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gameComputer++;
    } else {
      res.render('game_play', {
        message: 'Computer Drew Scissors - You Win',
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gamePlayer++;
    }
  }
  // player chooses paper
  else if (req.params.name === "paper") {
    // res.send(req.params.name + " beats rock");
    if (computerDraw === "paper" ) {
      res.render('game_play', {
        message: "Computer Drew Paper - Draw, No Points",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
    } else if ( computerDraw === "scissors") {
      res.render('game_play', {
        message: "Computer Drew Scissors - Your Lose",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gameComputer++;
    } else {
      res.render('game_play', {
        message: 'Computer Drew Rock - You Win',
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gamePlayer++;
    }
  }
  // player chooses scissors
  else if (req.params.name === "scissors") {
    if (computerDraw === "scissors" ) {
      res.render('game_play', {
        message: "Computer Drew Scissors - Draw, No Points",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
    } else if ( computerDraw === "rock") {
      res.render('game_play', {
        message: "Computer Drew Rock - Your Lose",
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gameComputer++;
    } else {
      res.render('game_play', {
        message: 'Computer Drew Paper - You Win',
        scorePlayer: gamePlayer,
        scoreComputer: gameComputer
      });
      gamePlayer++;
    }
  }
  // in case player is trying to be sneaky
  else {
    // res.send(req.params.name + " is not an option, you lose.");
    res.render('game_play', {
      message: 'That is not an option, try again with a legit option',
      scorePlayer: gamePlayer,
      scoreComputer: gameComputer
    });
  }

});

// basic server settings
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('server is listening on port', server.address().port);
});
