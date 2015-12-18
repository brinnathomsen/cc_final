//How do I make the main character not animate but jump from position to position and be able to stay still?

// SUBWAY: rat y position
var yRat1 = 1000;
var yRat2 = 1000;
var yRat3 = 1000;

// SUBWAY: rat x position
var xRat1 = 0;
var xRat2 = 0;
var xRat3 = 0;

// SUBWAY: rat size
var ratSize1 = 10;
var ratSize2 = 10;
var ratSize3 = 10;

// SEWER: trash x position
var xtrash1 = 0;
var xtrash2 = 0;
var xtrash3 = 0;

// SEWER: trash y position
var ytrash1 = 0;
var ytrash2 = 0;
var ytrash3 = 0;

// SEWER: trash size
var trashSize1 = 0;
var trashSize2 = 0;
var trashSize3 = 0;

//SEWER: bear position
var sewerPosition = 0;

//SUBWAY: bear position
var positionX = 0;

// Bear move
var move = 0;

var lifeCount = 3;

var mapPosition = 0;


// PIGEON: pigeon x positions
var pigeonPosition1 = 0;
var pigeonPosition2 = 0;
var pigeonPosition3 = 0;

//PIGEON: poop y positions
var ypoop1;
var ypoop2;
var ypoop3;

//DOGS:
var xtreePosition1 = 0;
var xtreePosition2 = 0;
var xtreePosition3 = 0;
var xtreePosition4 = 0;

var ytreePosition1 = 0;
var ytreePosition2 = 0;
var ytreePosition3 = 0;
var ytreePosition4 = 0;
var ytreePosition5 = 0;
var ytreePosition6 = 0;

var treeSize1 = 0;
var treeSize2 = 0;
var treeSize3 = 0;
var treeSize4 = 0;
var treeSize5 = 0;
var treeSize6 = 0;


// IMAGE VARIABLES
// used in multiple scenes
var gameOver;
var bearback;
var life;

//BEGINNING


// SUBWAY
var backgroundImg;
var rat1;
var rat2;
var rat3;

//SEWER
var sewerWater;
var sewerTeddy;

var sewerTrash1;
var sewerTrash2;
var sewerTrash3;

//DOGS
var dog1;
var dog2;
var dog3;
var tree1;
var tree2;
var tree3;
var tree4;
var forest;
var parkBackgroundSize;

//PIGEON
var pigeonBackground;
var pigeonl;
var pigeonr;


//END
var reunitedGirl;
var reunitedHome;
var reunitedMom;

var millisecond = millis();

var introSubway;
var introSubway2;


function preload() {
	bearback = loadImage("assets/bearback.png");
	life = loadImage("assets/life.png");

	introSubway = loadImage("assets/background_intro-01.png");
	introSubway2 = loadImage("assets/introsubway.png");

	backgroundImg = loadImage("assets/background_subway-01.png");
	rat1 = loadImage("assets/rat1.png");
	rat2 = loadImage("assets/rat2.png");
	rat3 = loadImage("assets/rat3.png");
	sewerWater = loadImage("assets/sewerwater-01.png");
	sewerTeddy = loadImage("assets/sewerteddy-01.png");
	sewerTrash1 = loadImage("assets/trash1-01.png");
	sewerTrash2 = loadImage("assets/trash2-01.png");
	sewerTrash3 = loadImage("assets/trash3-01.png");
	pigeonBackground = loadImage("assets/background_pigeon-01.png");
	pigeonl = loadImage("assets/pigeon_left-01.png");
	pigeonr = loadImage("assets/pigeon_right-01.png");
	dog1 = loadImage("assets/dog1-01.png");
	dog2 = loadImage("assets/dog2-01.png");
	dog3 = loadImage("assets/dog3-01.png");
	tree1 = loadImage("assets/tree1-01.png");
	tree2 = loadImage("assets/tree2-01.png");
	tree3 = loadImage("assets/tree3-01.png");
	tree4 = loadImage("assets/tree4-01.png");
	forest = loadImage("assets/background_park-01.png");
	reunitedHome = loadImage("assets/background_reunion-01.png");



	reunitedGirl = loadImage("assets/girl_reunited.png");
	reunitedMom = loadImage("assets/mother_happy-01.png");

	gameOver = loadImage("assets/gameover-01.png");

}

function setup() {
	// create a place to draw
	createCanvas(2000, windowHeight);



	//SUBWAY: setup
	xRat1 = random(windowWidth * .4, windowWidth * .6);
	xRat2 = random(windowWidth * .4, windowWidth * .6);
	xRat3 = random(windowWidth * .4, windowWidth * .6);

	yRat1 = windowWidth * .625 / 1.5;
	yRat2 = windowWidth * .625 / 1.6;
	yRat3 = windowWidth * .625 / 1.7;

	positionX = windowWidth / 2;

	//SEWER: setup
	sewerPosition = windowWidth / 2;

	xtrash1 = random(windowWidth / 6, windowWidth * .8);
	xtrash2 = random(windowWidth / 6, windowWidth * .8);
	xtrash3 = random(windowWidth / 6, windowWidth * .8);

	ytrash1 = windowHeight - 200;
	ytrash2 = windowHeight - 200;
	ytrash3 = windowHeight - 200;

	trashSize1 = 100;
	trashSize2 = 100;
	trashSize3 = 100;

	//PIGEON: setup
	pigeonPosition1 = windowWidth;
	pigeonPosition2 = 0;
	pigeonPosition3 = windowWidth / 2;

	ypoop1 = windowWidth / 8;
	ypoop2 = windowWidth / 8;
	ypoop3 = windowWidth / 8;

	//DOGS set up

	mapPosition = windowWidth / 2;

	xtreePosition1 = random(0, windowWidth);
	xtreePosition2 = random(0, windowWidth);
	xtreePosition3 = random(0, windowWidth);

	ytreePosition1 = windowWidth / 7.75;
	ytreePosition2 = windowWidth / 7.75;
	ytreePosition3 = windowWidth / 7.75;
	ytreePosition4 = windowWidth / 7.75;
	ytreePosition5 = windowWidth / 7.75;
	ytreePosition6 = windowWidth / 7.57;

	treeSize1 = 50;
	treeSize2 = 50;
	treeSize3 = 50;
	treeSize4 = 50;
	treeSize5 = 50;
	treeSize6 = 50;
	parkBackgroundSize = windowWidth;
}

function draw() {
	intro();
	//sceneSubway();
	//sceneSewer();
	//	scenePigeon();
	//sceneDogs();

	//conclusion();
	// pervent anything from going out of frame
	noStroke();
	fill(87, 85, 163);
	rect(0, windowWidth * .625, 2000, windowHeight);
}



function intro() {
	background(255);
	image(introSubway2, windowWidth / 5, windowWidth / 10, windowWidth / 1.2,
		windowWidth / 2.5);
	image(introSubway,
		0, 0, windowWidth, windowWidth * .64);



}

function conclusion() {
	background(255);

	image(reunitedHome, 0, 0, windowWidth, windowWidth * .64);

	imageMode(CENTER);
	image(reunitedGirl, windowWidth / 2, windowWidth / 2.4, windowWidth / 10,
		windowWidth / 4.5);

	image(reunitedMom, windowWidth / 6, windowWidth / 2.8, windowWidth / 2.5,
		windowWidth / 2.5);

}


function sceneDogs() {
	background(0, 173, 150);
	noStroke();



	var time = millis(0);

	// make the trees restart at the top in random positions
	if (ytreePosition1 > windowWidth / 2.7) {
		ytreePosition1 = windowWidth / 4;
		treeSize1 = 50;
		treeSize1 = treeSize1 * 1.003;
		ytreePosition1 = ytreePosition1 + .3;
	}
	if (ytreePosition2 > windowWidth / 2.7) {
		ytreePosition2 = windowWidth / 4;
		treeSize2 = 50;
		treeSize2 = treeSize2 * 1.003;
		ytreePosition2 = ytreePosition2 + .3;
	}
	if (ytreePosition3 > windowWidth / 2.7) {
		ytreePosition3 = windowWidth / 4;
		treeSize3 = 50;
		treeSize3 = treeSize3 * 1.003;
		ytreePosition3 = ytreePosition3 + .3;
	}

	if (ytreePosition4 > windowWidth / 2.7) {
		ytreePosition4 = windowWidth / 4;
		treeSize4 = 50;
		treeSize4 = treeSize4 * 1.003;
		ytreePosition4 = ytreePosition4 + .3;
	}


	// teddy
	push();


	imageMode(CENTER);
	image(forest, 100, 100, windowWidth, windowWidth);
	image(tree1, xtreePosition4, ytreePosition4, treeSize4, treeSize4);
	image(tree3, xtreePosition3, ytreePosition3, treeSize3, treeSize3);
	image(tree2, xtreePosition2, ytreePosition2, treeSize2, treeSize2);
	image(tree1, xtreePosition1, ytreePosition1, treeSize1, treeSize1);
	image(bearback, mapPosition, windowWidth / 3, windowHeight / 10, windowHeight /
		10);
	image(dog1, mapPosition, windowWidth / 2.2, 150, 150);

	pop();



	mapPosition = mapPosition + move


	// change size of dogs to increase as they come towards teddy
	if (time > 0) {
		treeSize1 = treeSize1 * 1.003;
		ytreePosition1 = ytreePosition1 + .3;
	}

	if (time > 2000) {
		treeSize2 = treeSize2 * 1.003;
		ytreePosition2 = ytreePosition2 + .3;
	}

	if (time > 6000) {
		treeSize3 = treeSize3 * 1.003;
		ytreePosition3 = ytreePosition3 + .3;
	}

	if (time > 10000) {
		treeSize4 = treeSize4 * 1.003;
		ytreePosition4 = ytreePosition4 + .3;
	}



}

function scenePigeon() {
	background(255);
	noStroke();
	image(pigeonBackground, 0, 0, windowWidth, windowWidth * .625);

	// teddy
	imageMode(CENTER);
	image(bearback, positionX, windowWidth - windowWidth * .5, windowHeight / 5,
		windowHeight / 5);

	// move teddy
	positionX = positionX + move


	// prevent teddy from going out of the scene
	if (positionX > windowWidth) {
		move = -5
	}
	if (positionX < 0) {
		move = 5
	}

	// pigeons + poop
	fill(255);
	ellipse(pigeonPosition1, ypoop1, 10, 10);
	image(pigeonl, pigeonPosition1, windowWidth / 8, 100, 100);
	ellipse(pigeonPosition2, ypoop2, 10, 10);
	image(pigeonr, pigeonPosition2, windowWidth / 8, 100, 100);
	ellipse(pigeonPosition3, ypoop3, 10, 10);
	image(pigeonl, pigeonPosition3, windowWidth / 8, 100, 100);

	// make pigeons move across screen
	pigeonPosition1 = pigeonPosition1 - 3
	pigeonPosition2 = pigeonPosition2 + 3
	pigeonPosition3 = pigeonPosition3 - 2


	// make the pigeons restart on the other side of the screen
	if (pigeonPosition1 < 0) {
		pigeonPosition1 = windowWidth;
	}
	if (pigeonPosition2 > windowWidth) {
		pigeonPosition2 = 0;
	}
	if (pigeonPosition3 < 0) {
		pigeonPosition3 = windowWidth;
	}

	// make pigeon poop fall
	ypoop1 = ypoop1 + 5;
	ypoop2 = ypoop2 + 5;
	ypoop3 = ypoop3 + 5;


	// make poop continue to fall
	if (ypoop1 > windowHeight - 10) {
		ypoop1 = windowWidth / 8;
	}
	if (ypoop2 > windowHeight + 10) {
		ypoop2 = windowWidth / 8;
	}

	if (ypoop3 > windowHeight) {
		ypoop3 = windowWidth / 8;
	}

	imageMode(CORNER);
	lifebar();

}

function sceneSewer() {


	sewerPosition = sewerPosition + move
		// clear the background
	background(255);
	noStroke();

	// tunnel
	for (var i = 0; i < 7; i++) {
		fill(209 - 30 * i, 210 - 30 * i, 212 - 30 * i);
		ellipseMode(CENTER);
		ellipse(windowWidth / 2, windowWidth * .625 / 2, windowWidth * 1.2 -
			windowWidth / 7 * i, windowWidth * 1.2 - windowWidth / 7 * i);
	}


	// water
	image(sewerWater, -20, windowWidth * .625 / 2, windowWidth + 30, 300);



	// trash can pass teddy
	if (ytrash1 > windowWidth * .625 / 2.2) {
		image(sewerTrash1, xtrash1, ytrash1, trashSize1, trashSize1);
	}

	if (ytrash2 > windowWidth * .625 / 2.2) {
		image(sewerTrash2, xtrash2, ytrash2, trashSize2, trashSize2);
	}

	if (ytrash3 > windowWidth * .625 / 2.2) {
		image(sewerTrash3, xtrash3, ytrash3, trashSize3, trashSize3);
	}


	// teddy
	imageMode(CENTER);
	image(sewerTeddy, sewerPosition, windowWidth * .625 / 1.8, windowWidth / 8,
		windowWidth / 8);

	imageMode(CORNER);
	// change size of trash to decrease as it comes towards teddy
	trashSize1 = trashSize1 * .9955;
	trashSize2 = trashSize2 * .9955;
	trashSize3 = trashSize3 * .9955;

	// trash floating in sewer water disappears in the distance
	if (ytrash1 > windowWidth * .625 / 1.6) {
		image(sewerTrash1, xtrash1, ytrash1, trashSize1, trashSize1);
	}

	if (ytrash2 > windowWidth * .625 / 1.6) {
		image(sewerTrash2, xtrash2, ytrash2, trashSize2, trashSize2);
	}

	if (ytrash3 > windowWidth * .625 / 1.6) {
		image(sewerTrash3, xtrash3, ytrash3, trashSize3, trashSize3);
	}

	// animate trash along Y axis
	ytrash1 = ytrash1 * .998;
	ytrash2 = ytrash2 * .998;
	ytrash3 = ytrash3 * .998;

	//animate trash along X axis in perspective
	if (xtrash1 > windowWidth / 2) {
		xtrash1 = xtrash1 * .999;
	} else if (xtrash1 < windowWidth / 2) {
		xtrash1 = xtrash1 * 1.001;
	}

	if (xtrash2 > windowWidth / 2) {
		xtrash2 = xtrash2 * .999;
	} else if (xtrash2 < windowWidth / 2) {
		xtrash2 = xtrash2 * 1.001;
	}

	if (xtrash3 > windowWidth / 2) {
		xtrash3 = xtrash3 * .999;
	} else if (xtrash3 < windowWidth / 2) {
		xtrash3 = xtrash3 * 1.001;
	}


	// make trash restart at the front
	if (ytrash1 < windowWidth * .625 / 2.3) {
		ytrash1 = windowHeight;
		xtrash1 = random(windowWidth / 6, windowWidth * .8);
		trashSize1 = 200;
	}
	if (ytrash2 < windowWidth * .625 / 2.5) {
		ytrash2 = windowHeight;
		xtrash2 = random(windowWidth / 6, windowWidth * .8);
		trashSize2 = 200;

	}
	if (ytrash3 < windowWidth * .625 / 2.2) {
		ytrash3 = windowHeight;
		xtrash3 = random(windowWidth / 6, windowWidth * .8);
		trashSize3 = 200;
	}


	// keep teddy in the tunnel
	if (sewerPosition > windowWidth * .8) {
		move = -3
	}
	if (sewerPosition < windowWidth / 5) {
		move = 3
	}


	imageMode(CORNER);
	livesSewer();
	lifebar();
}


function sceneSubway() {

	// clear the background
	background(255);
	image(backgroundImg, 0, 0, windowWidth, windowWidth * .625);

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

	imageMode(CORNER);
	lifebar();

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



}

function livesSewer() {
	var floatingbearAreaA = sewerPosition + 30
	var floatingbearAreaB = sewerPosition - 30

	var trashArea1a = xtrash1 + 2;
	var trashArea1b = xtrash1 - 2;
	var trashArea2a = xtrash2 + 2;
	var trashArea2b = xtrash2 - 2;
	var trashArea3a = xtrash3 + 2;
	var trashArea3b = xtrash3 - 2;


	if (ytrash1 > windowWidth * .625 && ytrash1 < windowWidth * .624 &&
		floatingbearAreaA > trashArea1b && floatingbearAreaB < trashArea1a) {
		lifeCount = lifeCount - 1;
	}

	if (ytrash2 > windowWidth * .625 && ytrash2 < windowWidth * .624 &&
		floatingbearAreaA > trashArea2b && floatingbearAreaB < trashArea2a) {
		lifeCount = lifeCount - 1;
	}

	if (ytrash3 > windowWidth * .625 && ytrash3 < windowWidth * .624 &&
		floatingbearAreaA > trashArea3b && floatingbearAreaB <
		trashArea3a) {
		lifeCount = lifeCount - 1;
	}

	lifebar();
}

function livesPigeons() {
	var pigeonBearAreaA = positionX + 10
	var pigeonBearAreaB = positionX - 10

	var poopArea1a = ypoop1 + 20;
	var poopArea1b = ypoop1 - 20;
	var poopArea2a = ypoop2 + 20;
	var poopArea2b = ypoop2 - 20;
	var poopArea3a = ypoop3 + 20;
	var poopArea3b = ypoop3 - 20;


	if (ypoop1 < windowWidth * .625 / 1.690 && ypoop1 > windowWidth * .625 /
		1.692 && floatingbearAreaA > poopArea1b && pigeonBearAreaB < poopArea1a) {
		lifeCount = lifeCount - 1;
	}

	if (ytrash2 > windowWidth * .625 / 1.690 && ytrash2 < windowWidth * .625 /
		1.62 *
		1.692 && floatingbearAreaA > trashArea2b && floatingbearAreaB < trashArea2a) {
		lifeCount = lifeCount - 1;
	}

	if (ytrash3 > windowWidth * .625 / 1.690 && ytrash3 < windowWidth * .625 /
		1.62 * 1.692 && floatingbearAreaA > trashArea3b && floatingbearAreaB <
		trashArea3a) {
		lifeCount = lifeCount - 1;
	}

	lifebar();
}

function lifebar() {

	// life bar

	fill(205, 100, 165, 175);
	noStroke();
	rect(windowWidth - windowWidth / 4, 18, windowWidth - windowWidth / 4,
		windowHeight / 15, 50);

	if (lifeCount < 1) {
		image(gameOver, 0, 0, windowWidth, windowWidth * .625);
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
