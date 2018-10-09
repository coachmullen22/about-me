'use strict';
alert('Welcome! Answer these questions and I promise your life will be enriched.');
alert('Please answer with either "yes" or "no", or "y" or "n" if you\'re lazy');
var username = prompt('What is your name?');

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