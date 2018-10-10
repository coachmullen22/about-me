'use strict';
alert('Welcome!');

var username = prompt('What is your name?');

alert('Hello ' + username + '. Guess what? If you answer the following 5 questions I promise your life will be enriched. To get the best results, please answer with either a "yes" or a "no". Or if you need to save your strength for the coding you\'ll be doing later, just type "y" or "n".');

var answerOne = prompt('Am I nice').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    alert('That\'s correct!');
    console.log('The user got question 1 correct.');
} else {
    alert('Wrong!');
    console.log('The user got question 1 wrong.');
}

var answerTwo = prompt('Who').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Good answer.');
    console.log('The user got question 2 correct');
} else {
    alert('Incorrect!');
    console.log('The user got question 2 wrong.');
}

var answerThree = prompt('What').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Fantastic!');
    console.log('The user got question 3 correct.');
} else {
    alert('To think I thought you\'d get that one right...');
    console.log('The user answered question 3 incorrectly');
}
var answerFour = prompt('When').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
    alert('Truly, you have a dizzying intellect.');
    console.log('The user got question 4 correct.');
} else {
    alert('Why am I smiling? Because I know someting you do not know...I am not left-handed');
    console.log('The user got question 4 wrong.');
}

var answerFive = prompt('Why').toLowerCase();

if (answerFive === 'no' || answerFive === 'n') {
    alert('Way to finish strong!');
    console.log('The user got question 5 correct, although maybe they cheated...');
} else {
    alert('On a scale of 1 to 10, you got this one wrong.');
    console.log('The user got question 5 incorrect.');
}

alert('Now wasn\'t that an enriching experience? Haha, I think I\'ll leave that as a rhetorical question!');