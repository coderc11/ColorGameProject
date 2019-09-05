var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
		//mode button event listeners
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			/*if(this.textContent === 'Easy') {
				numSquare = 3;
			} else {
				numSquares = 6;
			}*/
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to pickedColor
			if(clickedColor == pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

// Reset Button Functionality
resetButton.addEventListener('click', function () {
	reset();                
	/*//generate all new colors befor refactor
	colors = generateRandomColors(numSquares);
	//pick a new random color form array
	pickedColor	= colorPicker();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = 'New Colors';
	//reset messageDisplay to be blank
	messageDisplay.textContent = '';
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = '#3e9ec1';*/
});


function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color form array
	pickedColor	= colorPicker();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	//reset messageDisplay to be blank
	messageDisplay.textContent = '';
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = '#3e9ec1';
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++)
	//change each color to match given color
	squares[i].style.backgroundColor = color;
}

function colorPicker() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	// 'rgb(r, g, b)'
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

/*// Easy Button Functionality - before refactor
easyBtn.addEventListener('click', function() {
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = '#3e9ec1';
});

// Hard Button Functionality - before refactor
hardBtn.addEventListener('click', function() {
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
	h1.style.backgroundColor = '#3e9ec1';
});*/ 