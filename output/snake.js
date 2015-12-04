// When the BBC micro:bit runs.
function onStart() {
	microbit.say("A&B");
	while (true) {
		globals.x = 2;
		globals.y = 5;
		globals.dx = 0;
		globals.dy = -1;
		globals.length = 2;
		globals.headPointer = 0;
		globals.appleX = 2;
		globals.appleY = 4;
		globals.score = -1;
		globals.movedThisGo = false;
		globals.nextMove = 0;
		globals.oldX0 = -1;
		globals.oldY0 = -1;
		globals.oldX1 = -1;
		globals.oldY1 = -1;
		globals.oldX2 = -1;
		globals.oldY2 = -1;
		globals.oldX3 = -1;
		globals.oldY3 = -1;
		globals.oldX4 = -1;
		globals.oldY4 = -1;
		globals.oldX5 = -1;
		globals.oldY5 = -1;
		globals.oldX6 = -1;
		globals.oldY6 = -1;
		globals.oldX7 = -1;
		globals.oldY7 = -1;
		globals.oldX8 = -1;
		globals.oldY8 = -1;
		globals.oldX9 = -1;
		globals.oldY9 = -1;
		globals.gameOver = false;
		globals.gameStarted = false;
		while (!globals.gameStarted) {
			wait(50);
		}
		while (!globals.gameOver) {
			wait(300);
			globals.x = globals.x + globals.dx;
			globals.y = globals.y + globals.dy;
			if (globals.nextMove == 1) {
				turnLeft();
			}
			if (globals.nextMove == 2) {
				turnRight();
			}
			globals.nextMove = 0;
			globals.movedThisGo = false;
			if ((globals.appleX == globals.x) && (globals.appleY == globals.y)) {
				globals.score = globals.score + 1;
				while (true) {
					globals.appleX = Random.number(0, 4);
					globals.appleY = Random.number(0, 4);
					if (!microbit.isOn(globals.appleX, globals.appleY)) {
						break;
					}
				}
				microbit.on(globals.appleX, globals.appleY);
				if (globals.length < 10) {
					globals.length = globals.length + 1;
				}
			} else {
				if (microbit.isOn(globals.x, globals.y)) {
					globals.gameOver = true;
				}
			}
			if ((globals.x < 0) || (globals.y < 0) || (globals.x > 4) || (globals.y > 4)) {
				globals.gameOver = true;
			}
			microbit.on(globals.x, globals.y);
			if (globals.headPointer == 0) {
				globals.oldX0 = globals.x;
				globals.oldY0 = globals.y;
			}
			if (globals.headPointer == 1) {
				globals.oldX1 = globals.x;
				globals.oldY1 = globals.y;
			}
			if (globals.headPointer == 2) {
				globals.oldX2 = globals.x;
				globals.oldY2 = globals.y;
			}
			if (globals.headPointer == 3) {
				globals.oldX3 = globals.x;
				globals.oldY3 = globals.y;
			}
			if (globals.headPointer == 4) {
				globals.oldX4 = globals.x;
				globals.oldY4 = globals.y;
			}
			if (globals.headPointer == 5) {
				globals.oldX5 = globals.x;
				globals.oldY5 = globals.y;
			}
			if (globals.headPointer == 6) {
				globals.oldX6 = globals.x;
				globals.oldY6 = globals.y;
			}
			if (globals.headPointer == 7) {
				globals.oldX7 = globals.x;
				globals.oldY7 = globals.y;
			}
			if (globals.headPointer == 8) {
				globals.oldX8 = globals.x;
				globals.oldY8 = globals.y;
			}
			if (globals.headPointer == 9) {
				globals.oldX9 = globals.x;
				globals.oldY9 = globals.y;
			}
			var tailPointer = Math.mod(globals.headPointer + globals.length, 10);
			if (tailPointer == 0) {
				microbit.off(globals.oldX0, globals.oldY0);
			}
			if (tailPointer == 1) {
				microbit.off(globals.oldX1, globals.oldY1);
			}
			if (tailPointer == 2) {
				microbit.off(globals.oldX2, globals.oldY2);
			}
			if (tailPointer == 3) {
				microbit.off(globals.oldX3, globals.oldY3);
			}
			if (tailPointer == 4) {
				microbit.off(globals.oldX4, globals.oldY4);
			}
			if (tailPointer == 5) {
				microbit.off(globals.oldX5, globals.oldY5);
			}
			if (tailPointer == 6) {
				microbit.off(globals.oldX6, globals.oldY6);
			}
			if (tailPointer == 7) {
				microbit.off(globals.oldX7, globals.oldY7);
			}
			if (tailPointer == 8) {
				microbit.off(globals.oldX8, globals.oldY8);
			}
			if (tailPointer == 9) {
				microbit.off(globals.oldX9, globals.oldY9);
			}
			if (globals.headPointer == 0) {
				globals.headPointer = 10;
			}
			globals.headPointer = globals.headPointer - 1;
		}
		microbit.say(globals.score);
	}
}

function onPressA() {
	if (globals.movedThisGo) {
		globals.nextMove = 1;
	} else {
		turnLeft();
	}
}

function onPressB() {
	if (globals.movedThisGo) {
		globals.nextMove = 2;
	} else {
		turnRight();
	}
}

function turnLeft() {
	var oldDx = globals.dx;
	globals.dx = globals.dy;
	globals.dy = 0 - oldDx;
	globals.movedThisGo = true;
}

function turnRight() {
	var oldDx = globals.dx;
	globals.dx = 0 - globals.dy;
	globals.dy = oldDx;
	globals.movedThisGo = true;
}

function onPressAandB() {
	globals.gameStarted = true;
}

