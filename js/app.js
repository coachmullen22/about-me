'use strict';

var correctAnswers = 0;
var questionsAsked = 0;

// console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' correctly');


alert('Welcome, my friend!');

var username = prompt('What is your name?');

alert('Well hello, ' + username + '. Guess what? If you answer the following 5 questions I promise your life will be enriched.');

alert('To get the best results, please answer with either a "yes" or a "no". Or if you need to save your strength for all the shredding you\'ll be doing later, just type "y" or "n".');

var ballPlayer = prompt('Let\'s start easy. Do I look like a baseball player?').toLowerCase();

if (ballPlayer === 'yes' || ballPlayer === 'y') {
  alert('You\'re right! My favorite place in the world is on the diamond!');
  correctAnswers++;
  questionsAsked++;
  console.log('The user got question 1 correct.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
} else {
  alert('I may have lost a step but c\'mon, do I not look like a leadoff hitter?');
  questionsAsked++;
  console.log('The user got question 1 wrong.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
}

var homeRun = prompt('Did I ever hit a homerun in my high school playing days?').toLowerCase();

if (homeRun === 'no' || homeRun === 'n') {
  alert('Good answer, ' + username + '. My game was all speed and defense.');
  correctAnswers++;
  questionsAsked++;
  console.log('The user got question 2 correct');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
} else {
  alert('No, I hit a few legit bombs later in life, but I was scrawny in high school.');
  questionsAsked++;
  console.log('The user got question 2 wrong.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
}

var marinersFan = prompt('Are the Mariners my favorite MLB team?').toLowerCase();

if (marinersFan === 'yes' || marinersFan === 'y') {
  alert('Of course they are. They are forever my favorite team!');
  correctAnswers++;
  questionsAsked++;
  console.log('The user got question 3 correct.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
} else {
  alert('I was convinced you\'d get that one right but it seems we were both very wrong.');
  questionsAsked++;
  console.log('The user answered question 3 incorrectly');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
}
var rightHanded = prompt('Am I right-handed?').toLowerCase();

if (rightHanded === 'yes' || rightHanded === 'y') {
  alert('"Truly, you have a dizzying intellect."');
  correctAnswers++;
  questionsAsked++;
  console.log('The user got question 4 correct.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
} else {
  alert('Why am I smiling? "Because I know something you do not know...I am not left-handed."');
  questionsAsked++;
  console.log('The user got question 4 wrong.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
}

var princessBride = prompt('Is it ever possible to overquote, "The Princess Bride"?').toLowerCase();

if (princessBride === 'no' || princessBride === 'n') {
  alert('"Let me explain...no, there is too much. Let me sum up..." You\'re absolutely right!');
  correctAnswers++;
  questionsAsked++;
  console.log('The user got question 5 correct, although it is possible they cheated...');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
} else {
  alert('"Inconceivable!" You are clearly wrong on this point.');
  questionsAsked++;
  console.log('The user got question 5 incorrect.');
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');
}
//alert('Now wasn\'t that an enriching experience? Haha, maybe we should let that be a rhetorical question!');



var stadiumsVisited = ['indians', 'giants', 'athletics', 'padres', 'white sox', 'yankees', 'cardinals', 'brewers', 'cubs'];
console.log(stadiumsVisited);
//console.log(stadiumsVisited.length);

var stadiumTally = stadiumsVisited.length;
var guessesLeft = 4;
var goodGuess = false;
console.log(stadiumTally);

//Question #6

while (guessesLeft > 0) {
  var guessTally = parseInt(prompt('Obviously, I love baseball. Can you guess how many Major League Stadiums I\'ve visited (outside of Seattle)? I\'ll give you 4 chances.'));
  guessesLeft--;

  if (guessTally > 100 || guessTally < 1 || isNaN(guessTally)) {
    guessesLeft++;
    alert('I think you made a mistake. Try a number between 1 and 100. You have ' + guessesLeft + ' remaining.');
  }
  else if (guessTally > stadiumTally) {
    alert('I wish! That\'s a little high though. Try a smaller number. You have ' + guessesLeft + ' remaining.');
  }
  else if (guessTally < stadiumTally) {
    alert('I\'ve been to a few more stadiums than that. But you\'re not so far off. You have ' + guessesLeft + ' remaining.')
  }
  else {
    alert('My, oh my! You got it right! Congratulations!');
    guessesLeft = -1;
    correctAnswers++;
    console.log('The user answered question 6 correctly.')
  }
}
questionsAsked++;
console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');

//Question #7
guessesLeft = 6;

While (guessesLeft > 0) {
  var stadiumGuess = prompt('So I\'ve travelled to nine ballparks in my lifetime. Try to guess the which ones. To make it easier, I\'ll have you enter the team name instead of the stadium. For example, "Mariners" or "Pilots" would work.').toLowerCase;
  guessesLeft--;

  if(stadiumsVisited.includes(stadiumGuess)) {
    alert('Wow, are you a mind-reader? You nailed it!');
    guessesLeft=-1;
    correctAnswers++;
  }
  if(guessesLeft > 3) {
    alert('Try again...');
  }
  if(guessesLeft === 3) {
    alert('Never give up!');
  }
  if(3 > guessesLeft > 0) {
    alert('Keep trying...');
  }
  if(guessesLeft === 0) {
    alert('Ok, time to give up. The teams whose stadiums I\'ve visited are the Athletics, Giants, Padres, Indians, Cardinals, White Sox, Yankees, Brewers, and Cubs. Go Cubs, Go!')
  }
}
  questionsAsked++;
  console.log('The user has answered ' + correctAnswers + ' out of ' + questionsAsked + ' questions correctly.');

  alert('You got ' + correctAnswers + ' answers correct out of ' + questionsAsked + ' questions I asked. But now you know a little more about me. Thanks for playing along!');