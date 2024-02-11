var numSquares = 6
var colors = []
var pickedColor

var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetBtn = document.querySelector("#reset")
var modeBtns = document.querySelectorAll(".mode")



init()

resetBtn.addEventListener("click", function() {
	reset()
})


function init() {

	setupModeBtns()

	setupSquares()

	reset()
}

function setupModeBtns() {
	//mode btns event listeners
	for(var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected")
			modeBtns[1].classList.remove("selected")
			this.classList.add("selected")

			//terenary operator
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6
			reset()
		})
	}
}

function setupSquares() {
	for(var i =0; i < squares.length; i++) {

		//add click listener to square
		squares[i].addEventListener("click", function() {
			//grab color selected square
			var clickedColor = this.style.backgroundColor
			
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				resetBtn.textContent = "Paly Again?"
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again"
			}
		})
	}	
}

function reset() {
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	
	resetBtn.textContent = "New Colors"
	messageDisplay.textContent = ""


	for(var i =0; i < squares.length; i++) {
		//add initial colors to squares
		if(colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = "none"
		}
	}
	// h1.style.backgroundColor = "#232323"
	h1.style.backgroundColor = "steelblue"
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	//make an array
	var arr = []

	//add num random colors to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	
	//return array
	return arr
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}