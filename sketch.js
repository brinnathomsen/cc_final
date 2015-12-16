//How do I make the main character not animate but jump from position to position and be able to stay still?

// enemy y position
var yRat1 = 1000;
var yRat2 = 1000;
var yRat3 = 1000;

// enemy X position
var xRat1 = 0;
var xRat2 = 0;
var xRat3 = 0;

// sizes of enemies
var ratSize1 = 10;
var ratSize2 = 10;
var ratSize3 = 10;


var positionX = 0;
var move = 0;
var lifeCount = 3;
var sewerPosition = 0;


// image variables
var backgroundImg;
var rat1;
var rat2;
var rat3;
var bearback;
var life;
var bearkick;
var sewerWater;
var sewerTeddy;

var sewerTrash1;


function preload() {
	backgroundImg = loadImage("assets/background_subway-01.png");
	rat1 = loadImage("assets/rat1.png");
	rat2 = loadImage("assets/rat2.png");
	rat3 = loadImage("assets/rat3.png");
	bearback = loadImage("assets/bearback.png");
	life = loadImage("assets/life.png");
	bearkick = loadImage("assets/bearkick-01.png");
	sewerWater = loadImage("assets/sewerwater-01.png");
	sewerTeddy = loadImage("assets/sewerteddy-01.png");
	sewerTrash1 = loadImage("assets/trash1-01.png");
}

function setup() {
	// create a place to draw
	createCanvas(2000, windowHeight);

	xRat1 = random(windowWidth * .4, windowWidth * .6);
	xRat2 = random(windowWidth * .4, windowWidth * .6);
	xRat3 = random(windowWidth * .4, windowWidth * .6);


	yRat1 = windowWidth * .625 / 1.5;
	yRat2 = windowWidth * .625 / 1.6;
	yRat3 = windowWidth * .625 / 1.7;

	positionX = windowWidth / 2;
	sewerPosition = windowWidth / 2;
}

function draw() {

	//	sceneSubway();
	sceneSewer();
	// pervent anything from going out of frame
	noStroke();
	fill(86, 84, 164);
	rect(0, windowWidth * .625, 2000, windowHeight);
}

function sceneSewer() {



	sewerPosition = sewerPosition + move
		// clear the background
	background(255);
	noStroke();

	for (var i = 0; i < 7; i++) {

		fill(209 - 30 * i, 210 - 30 * i, 212 - 30 * i);
		ellipseMode(CENTER);
		ellipse(windowWidth / 2, windowWidth * .625 / 2, windowWidth * 1.2 -
			windowWidth / 7 * i, windowWidth * 1.2 - windowWidth / 7 * i);
	}

	image(sewerWater, -20, windowWidth * .625 / 2, windowWidth + 30, 300);

	image(sewerTeddy, sewerPosition, windowWidth * .625 / 2, windowWidth / 8,
		windowWidth / 8);


	// trash floating in sewer  water
	image(sewerTrash1, sewerPosition + 100, windowWidth * .625 / 2, windowWidth /
		15, windowWidth / 15);

	if (sewerPosition > windowWidth) {
		move = -3
	}
	if (sewerPosition < windowWidth / 5) {
		move = 3
	}


}


function sceneSubway() {

	// clear the background
	background(255);
	image(backgroundImg, 0, 0, windowWidth, windowWidth * .625);


	// life bar

	fill(205, 100, 165, 175);
	noStroke();
	rect(windowWidth - windowWidth / 4, 18, windowWidth - windowWidth / 4,
		windowHeight / 15, 50);


	livesSubway();

	// animated enemies along Y axis
	yRat1 = yRat1 * 1.002;
	yRat2 = yRat2 * 1.002;
	yRat3 = yRat3 * 1.002;

	//animate enemies along X axis in perspective
	if (xRat1 > windowWidth / 2) {
		xRat1 = xRat1 * 1.0010;
	} else if (xRat1 < windowWidth / 2) {
		xRat1 = xRat1 * .9985;
	}

	if (xRat2 > windowWidth / 2) {
		xRat2 = xRat2 * 1.0015;
	} else if (xRat2 < windowWidth / 2) {
		xRat2 = xRat2 * .9985;
	}

	if (xRat3 > windowWidth / 2) {
		xRat3 = xRat3 * 1.0015;
	} else if (xRat3 < windowWidth / 2) {
		xRat3 = xRat3 * .9985;
	}



	// change size of enemies to increase as they come towards teddy
	ratSize1 = ratSize1 * 1.01;
	ratSize2 = ratSize2 * 1.01;
	ratSize3 = ratSize3 * 1.01;



	// make the enemies restart at the top in random positions
	if (yRat1 > windowWidth * .635) {
		yRat1 = windowWidth * .625 / 1.65;
		xRat1 = random(windowWidth * .45, windowWidth * .55);
		ratSize1 = 10;
	}
	if (yRat2 > windowWidth * .625) {
		yRat2 = windowWidth * .625 / 1.65;
		xRat2 = random(windowWidth * .45, windowWidth * .55);
		ratSize2 = 10;
	}
	if (yRat3 > windowWidth * .625) {
		yRat3 = windowWidth * .625 / 1.65;
		xRat3 = random(windowWidth * .45, windowWidth * .55);
		ratSize3 = 10;
	}

	// CHARACTERS

	// Rat 1
	imageMode(CENTER);
	image(rat1, xRat1, yRat1, ratSize1, ratSize1)

	// Rat 2
	imageMode(CENTER);
	image(rat2, xRat2, yRat2, ratSize2, ratSize2)

	// Rat 3
	imageMode(CENTER);
	image(rat3, xRat3, yRat3, ratSize3, ratSize3)


	// Teddy
	imageMode(CENTER);
	image(bearback, positionX, windowWidth - windowWidth * .5, windowHeight / 5,
		windowHeight / 5);



	positionX = positionX + move


	// prevent teddy from going out of the scene
	if (positionX > windowWidth) {
		move = -5
	}
	if (positionX < 0) {
		move = 5
	}


	// make enemies be able to pass teddy

	if (yRat1 > windowWidth - windowWidth * .45) {
		imageMode(CENTER);
		image(rat1, xRat1, yRat1, ratSize1, ratSize1)
	}

	if (yRat2 > windowWidth - windowWidth * .45) {
		imageMode(CENTER);
		image(rat2, xRat2, yRat2, ratSize2, ratSize2)
	}

	if (yRat3 > windowWidth - windowWidth * .45) {
		imageMode(CENTER);
		image(rat3, xRat3, yRat3, ratSize3, ratSize3)
	}

}


function livesSubway() {
	var bearAreaA = positionX + 30
	var bearAreaB = positionX - 30

	var ratArea1a = xRat1 + 2;
	var ratArea1b = xRat1 - 2;
	var ratArea2a = xRat2 + 2;
	var ratArea2b = xRat2 - 2;
	var ratArea3a = xRat3 + 2;
	var ratArea3b = xRat3 - 2;
	if (yRat1 > windowWidth - windowWidth * .46 && yRat1 < windowWidth -
		windowWidth * .459 && bearAreaA > ratArea1b && bearAreaB < ratArea1a) {
		lifeCount = lifeCount - 1;
	}

	if (yRat2 > windowWidth - windowWidth * .46 && yRat2 < windowWidth -
		windowWidth * .459 && bearAreaA > ratArea2b && bearAreaB < ratArea2a) {
		lifeCount = lifeCount - 1;
	}

	if (yRat3 > windowWidth - windowWidth * .46 && yRat3 < windowWidth -
		windowWidth * .4599 && bearAreaA > ratArea3b && bearAreaB < ratArea3a) {
		lifeCount = lifeCount - 1;
	}


	if (lifeCount >= 1) {
		image(life, windowWidth - windowWidth / 4.5, 25, windowHeight / 20,
			windowHeight / 20);
	}

	if (lifeCount >= 1) {
		image(life, windowWidth - windowWidth / 4.5, 25, windowHeight / 20,
			windowHeight / 20);
	}

	if (lifeCount >= 2) {
		image(life, windowWidth - windowWidth / 6, 25, windowHeight / 20,
			windowHeight / 20);
	}

	if (lifeCount >= 3) {
		image(life, windowWidth - windowWidth / 9, 25, windowHeight / 20,
			windowHeight / 20, 255);
	}
}



function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		move = -2;
	} else if (keyCode == RIGHT_ARROW) {
		move = 2;

	} else if (keyCode == DOWN_ARROW) {
		move = 0;
	}



	function keyReleased() {
		if (positionX > 0) {
			move = 0;
		} else {
			move = 0
		}
	}



	return false; // prevent default

}
