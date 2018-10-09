'use strict';
alert('Welcome!');

var username = prompt('What is your name?');

alert('Hello ' + username + '. Guess what? If you answer the following 5 questions I promise your life will be enriched. To get the best results, please answer with either a "yes" or a "no"...or "y" or "n" if you need to save your strength for the coding you\'ll be doing later.');

var answerOne = prompt('Am I nice').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    alert('That\'s correct!');
    console.log('The user got question 1 correct.');
} else {
    alert('Wrong!');
    console.log('The user got question 1 wrong.');
}

var answerTwo = prompt('Who').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Good answer.');
    console.log('The user got question 2 correct');
} else {
    alert('Incorrect!');
    console.log('The user got question 2 wrong.');
}

var answerThree = prompt('What').toLowerCase();


var answerFour = prompt('When').toLowerCase();


var answerFive = prompt('Why').toLowerCase();
