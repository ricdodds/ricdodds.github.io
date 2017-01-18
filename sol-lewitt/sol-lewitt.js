var r = 200;
var d = 2 * r;

var xsize = 10;
var ysize = 5;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
	createCanvas(xsize * r, ysize * r);

	noFill();

	for (row = 0; row < ysize; row++) {
		for (column = 0; column < xsize; column++) {
			drawShape(column, row, getRandomIntInclusive(1, 4), getRandomIntInclusive(1, 5));
			drawShape(column, row, getRandomIntInclusive(1, 4), getRandomIntInclusive(1, 5));
		}
	}
}

function drawShape(x, y, index, group) {
	switch(group) {
		case 1:
			drawQuarter(x, y, index);
			break;
		case 2:
			drawArc(x, y, index);
			break;
		case 3:
			drawLine(x, y, index);
			break;
		case 4:
			drawDashedLine(x, y, index);
			break;
		case 5:
			drawFreehandLine(x, y, index);
			break;
	}
}

function drawQuarter(x, y, index) {
	switch(index) {
		case 1:
			arc(x * r + r, y * r + r, d, d, PI, -HALF_PI, OPEN);
			break;
		case 2:
			arc(x * r, y * r, d, d, 0, HALF_PI, OPEN);
			break;
		case 3:
			arc(x * r + r, y * r, d, d, HALF_PI, PI, OPEN);
			break;
		case 4:
			arc(x * r, y * r + r, d, d, -HALF_PI, 0, OPEN);
			break;
	}
	
}

function drawArc(x, y, index) {
	switch(index) {
		case 1:
			arc(x * r + r * 0.366 + r, y * r + 1/2 * r, d, d, 5/3 * HALF_PI, 7/3 * HALF_PI, OPEN);
			break;
		case 2:
			arc(x * r - r * 0.366, y * r + 1/2 * r, d, d, -1/3 * HALF_PI, 1/3 * HALF_PI, OPEN);
			break;
		case 3:
			arc(x * r + r/2, y * r + r * 1.366, d, d, -4/3 * HALF_PI, -2/3 * HALF_PI, OPEN);
			break;
		case 4:
			arc(x * r + r/2, y * r - r * 0.366, d, d, 2/3 * HALF_PI, 4/3 * HALF_PI, OPEN);
			break;
	}	
}

function drawLine(x, y, index) {
	switch(index) {
		case 1:
			line(x * r, y * r, x * r + r, y * r + r);
			break;
		case 2:
			line(x * r, y * r + r, x * r + r, y * r);
			break;
		case 3:
			line(x * r + r/2, y * r, x * r + r/2, y * r + r);
			break;
		case 4:
			line(x * r, y * r + r/2, x * r + r, y * r + r/2);
			break;
	}

}

function drawDashedLine(x, y, index) {
	switch(index) {
		case 1:
			dashedLine(x * r, y * r, x * r + r, y * r + r);
			break;
		case 2:
			dashedLine(x * r, y * r, x * r + r, y * r + r);
			break;
		case 3:
			dashedLine(x * r + r/2, y * r, x * r + r/2, y * r + r);
			break;
		case 4:
			dashedLine(x * r, y * r + r/2, x * r + r, y * r + r/2);
			break;
	}

}

function dashedLine(x0, y0, x1, y1) {
	var size = 20;

	var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
	if(steep) {
		var tmp;
		tmp = x0; x0 = y0; y0 = tmp;
		tmp = x1; x1 = y1; y1 = tmp;
	}

	var sign = 1;
	if(x0 > x1) {
		sign = -1;
		x0 *= -1;
		x1 *= -1;
	}

	var length = Math.sqrt(Math.pow(y1 - y0, 2) + Math.pow(x1 - x0, 2))
	var step = length / size;

	var dx = (x1 - x0) / step;
	var dy = Math.abs(y1 - y0) / step;
	
	var y = y0;
	var skip = false;

	for(var x = x0; x < x1; x += dx) {
		if (!skip) {
			skip = true;
			if(!(steep ? line(y, sign * x, y + dy, sign * x + dx) : line(sign * x, y, sign * x + dx, y + dy)))
				return;
		} else {
			skip = false;
		}
		y += dy;
	}
}

function drawFreehandLine(x, y, index) {
	switch(index) {
		case 1:
			freehandLine(x * r, y * r, x * r + r, y * r + r);
			break;
		case 2:
			freehandLine(x * r, y * r, x * r + r, y * r + r);
			break;
		case 3:
			freehandLine(x * r + r/2, y * r, x * r + r/2, y * r + r);
			break;
		case 4:
			freehandLine(x * r, y * r + r/2, x * r + r, y * r + r/2);
			break;
	}

}

function freehandLine(x0, y0, x1, y1) {
	var size = 10;
	var random = 4;

	var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
	if(steep) {
		var tmp;
		tmp = x0; x0 = y0; y0 = tmp;
		tmp = x1; x1 = y1; y1 = tmp;
	}

	var sign = 1;
	if(x0 > x1) {
		sign = -1;
		x0 *= -1;
		x1 *= -1;
	}

	var length = Math.sqrt(Math.pow(y1 - y0, 2) + Math.pow(x1 - x0, 2))
	var step = length / size;

	var dx0 = (x1 - x0) / step;
	var dy0 = Math.abs(y1 - y0) / step;
	
	var y = y0;
	var x = x0;
	var dx = dx0;
	var dy = dy0;
	
	while (x < x1 && y < y1) {
		dx += (dx0 - dx) + (Math.random() * random - random / 2);
		dy += (dy0 - dy) + (Math.random() * random - random / 2);

		if(!(steep ? line(y, sign * x, y + dy, sign * x + dx) : line(sign * x, y, sign * x + dx, y + dy)))
			return;
		x += dx;
		y += dy
	}
}
