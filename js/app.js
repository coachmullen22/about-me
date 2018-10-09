'use strict';
alert('Welcome! Answer these questions and I promise your life will be enriched.');

var username = prompt('What is your name?');

alert('Hello ' + username + '. As we go forward, please answer with either "yes" or "no", or "y" or "n" if you don\'t feel like typing the extra letter or two...');

var answerOne = prompt('Am I nice').toLowerCase();
var answerTwo = prompt('Who').toLowerCase();
var answerThree = prompt('What').toLowerCase();
var answerFour = prompt('When').toLowerCase();
var answerFive = prompt('Why').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    alert('That\'s correct!');
    console.log('The user got question 1 correct.');
} else {
    alert('Wrong!');
    console.log('The user got question 1 wrong.');
}

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Good answer.');
    console.log('The user got question 2 correct');
} else {
    alert('Incorrect!');
    console.log('The user got question 2 wrong.');
}