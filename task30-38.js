function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item);
	arr.shift();
	return item;
	// Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];


// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


function trueOrFalse(wasThatTrue) {
	// Only change code below this line

	if (wasThatTrue) {
		return 'Yes, that was true';
	}
	return 'No, that was false'
	// Only change code above this line

}

// Setup
function testNotEqual(val) {
	if (val != 99) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testNotEqual(10);

function testGreaterThan(val) {
	if (val > 100) {  // Change this line
		return "Over 100";
	}

	if (val > 10) {  // Change this line
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);



function testLogicalOr(val) {
	// Only change code below this line

	if (val > 10 || val < 20) {
		return "Outside";
	}

	// Only change code above this line
	return "Inside";
}

testLogicalOr(15);



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes == 1) {
		return names[0]
	} else if (strokes <= par - 2) {
		return names[1]
	} else if (strokes <= par - 1) {
		return names[2]
	} else if (strokes == par) {
		return names[3]
	} else if (strokes == par + 1) {
		return names[4]
	} else if (strokes == par + 2) {
		return names[5]
	} else if (strokes >= par + 3) {
		return names[6]
	}
	return "Change Me";
	// Only change code above this line
}

golfScore(5, 4);


function switchOfStuff(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case a:
			answer = 'apple';
			break;
		case b:
			answer = 'bird';
			break;
		case c:
			answer = 'cat';
			break;
		default:
			stuff;
			break;
	}


	// Only change code above this line
	return answer;
}

switchOfStuff(1);



function sequentialSizes(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break; case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}


	// Only change code above this line
	return answer;
}

sequentialSizes(1);