//How do I make the main character not animate but jump from position to position and be able to stay still?


// enemy y position
var yCircle1 = 0;
var yCircle2 = 0;
var yCircle3 = 0;

// enemy X position
var xCircle1 = 0;
var xCircle2 = 0;
var xCircle3 = 0;

// sizes of enemies
var circleSize1 = 0;
var circleSize2 = 0;
var circleSize3 = 0;


var positionX = 0;
var move = 0;

var backgroundImg;

function preload() {
	backgroundImg = loadImage("assets/background_subway.jpg");
}

function setup() {
	// create a place to draw
	createCanvas(windowWidth, windowHeight);

	xCircle1 = random(0, windowWidth);
	xCircle2 = random(0, windowWidth);
	xCircle3 = random(0, windowWidth);
	positionX = windowWidth / 2;
}

function draw() {
	// clear the background
	background(color(155, 82, 199));
	image(backgroundImg, 0, 0, windowWidth, windowHeight);

	// animated enemies along Y axis
	yCircle1 = yCircle1 + 1;
	yCircle2 = yCircle2 + 2;
	yCircle3 = yCircle3 + 3;

	// change size of enemies to increase as they come towards teddy
	circleSize1 = yCircle1 / 3;
	circleSize2 = yCircle2 / 3;
	circleSize3 = yCircle3 / 3;
	positionX = positionX + move


	// make the enemies restart at the top in random positions
	if (yCircle1 > windowHeight) {
		yCircle1 = -200;
		xCircle1 = random(0, windowWidth);
	}
	if (yCircle2 > windowHeight) {
		yCircle2 = -200;
		xCircle2 = random(0, windowWidth);
	}
	if (yCircle3 > windowHeight) {
		yCircle3 = -200;
		xCircle3 = random(0, windowWidth);
	}



	// CHARACTERS

	// Enemy 1
	noStroke();
	fill(255, 165, 0);

	ellipse(xCircle1, yCircle1, circleSize1, circleSize1)
		// Enemy 2
	fill(250, 128, 114);
	ellipse(xCircle2, yCircle2, circleSize2, circleSize2)

	// Enemy 3
	fill(176, 224, 230);
	ellipse(xCircle3, yCircle3, circleSize3, circleSize3)


	// Teddy
	fill(255);
	ellipse(positionX, windowHeight - 100, 50, 50);


}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		move = -5;
	} else if (keyCode == RIGHT_ARROW) {
		move = 5;
	}

	if (positionX > windowWidth) {
		move = -5
	}

	if (positionX < 0) {
		move = 5
	}


	return false; // prevent default

}
