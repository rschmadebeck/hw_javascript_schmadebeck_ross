// Function Howdy
var fullName = 'Ross Schmadebeck';

function howdy() {
	console.log(fullName + ' says, "Hello"')
}

//Function numba

var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word');
	} else { if (string.length > 7) {
			console.log("I'm sorry, but that's too many to count");
		} else {
			console.log('7, what a perfect choice!');
		}
	}
};

numba('seven');
 
numba('seventy');
 
numba('university');

//Function inception

function inception(callback, value) {
	callback(value);
}

function movieTitle(title) {
	console.log(title + ' is a fantastic movie.')
}

inception(movieTitle, 'Star Wars');