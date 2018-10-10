'use strict';
alert('Welcome, my friend!');

var username = prompt('What is your name?');

alert('Well hello ' + username + '. Guess what? If you answer the following 5 questions I promise your life will be enriched.');

alert('To get the best results, please answer with either a "yes" or a "no". Or if you need to save your strength for all the shredding you\'ll be doing later, just type "y" or "n".');

var ballPlayer = prompt('Let\'s start easy. Do I look like a baseball player?').toLowerCase();

if (ballPlayer === 'yes' || ballPlayer === 'y') {
  alert('You\'re right! My favorite place in the world is on the diamond!');
  console.log('The user got question 1 correct.');
} else {
  alert('I may have lost a step but c\'mon, do I not look like a leadoff hitter?');
  console.log('The user got question 1 wrong.');
}

var homeRun = prompt('Did I ever hit a homerun in my high school playing days?').toLowerCase();

if (homeRun === 'no' || homeRun === 'n') {
  alert('Good answer, ' + username + '. My game was all speed and defense.');
  console.log('The user got question 2 correct');
} else {
  alert('No, I hit a few legit bombs later in life, but I was scrawny in high school.');
  console.log('The user got question 2 wrong.');
}

var marinersFan = prompt('Are the Mariners my favorite MLB team?').toLowerCase();

if (marinersFan === 'yes' || marinersFan === 'y') {
  alert('Of course they are. They are forever my favorite team!');
  console.log('The user got question 3 correct.');
} else {
  alert('I was convinced you\'d get that one right but it seems we were both very wrong.');
  console.log('The user answered question 3 incorrectly');
}
var rightHanded = prompt('Am I right-handed?').toLowerCase();

if (rightHanded === 'yes' || rightHanded === 'y') {
  alert('"Truly, you have a dizzying intellect."');
  console.log('The user got question 4 correct.');
} else {
  alert('Why am I smiling? "Because I know something you do not know...I am not left-handed."');
  console.log('The user got question 4 wrong.');
}

var princessBride = prompt('Is it ever possible to overquote, "The Princess Bride"?').toLowerCase();

if (princessBride === 'no' || princessBride === 'n') {
  alert('"Let me explain...no, there is too much. Let me sum up..." You\'re absolutely right!');
  console.log('The user got question 5 correct, although it is possible they cheated...');
} else {
  alert('"Inconceivable!" You are clearly wrong on this point.');
  console.log('The user got question 5 incorrect.');
}
alert('Now wasn\'t that an enriching experience? Haha, maybe we should let that be a rhetorical question!');
