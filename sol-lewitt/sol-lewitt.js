var r = 200;
var d = 2 * r;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
	createCanvas(4 * r, 3 * r);

	noFill();

	for (row = 0; row < 3; row++) {
		for (column = 0; column < 4; column++) {
			draw_shape(column, row, getRandomIntInclusive(1, 4), getRandomIntInclusive(1, 3));
			draw_shape(column, row, getRandomIntInclusive(1, 4), getRandomIntInclusive(1, 3));
		}
	}
}

function draw_shape(x, y, index, group) {
	switch(group) {
		case 1:
			draw_quarter(x, y, index);
			break;
		case 2:
			draw_arc(x, y, index);
			break;
		case 3:
			draw_line(x, y, index);
			break;
	}
}

function draw_quarter(x, y, index) {
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

function draw_arc(x, y, index) {
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

function draw_line(x, y, index) {
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
