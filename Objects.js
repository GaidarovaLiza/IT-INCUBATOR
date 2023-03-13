const myDog = {
	// Only change code below this line
	name: 'Make',
	legs: 4,
	tails: 1,
	friends: ['Ann', 'Nik', 'Bob']

	// Only change code above this line
};


// Setup
const testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


// Setup
const testObj2 = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Setup
const myDog3 = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
};

delete myDog.tails

// Only change code below this line


function checkObj(obj, checkProp) {
	// Only change code below this line
	if (obj.hasOwnProperty(checkProp)) {
		return checkProp
	}
	return "Not Found";
	// Only change code above this line
}

const myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

const gloveBoxContents = myStorage.car.inside['glove box'];



// Setup
const recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: []
	},
	5439: {
		albumTitle: 'ABBA Gold'
	}
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
	if (prop !== "tracks" && value !== "") {
		records[id][prop] = value;
	} else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
		records[id][prop] = [value];
	} else if (prop === "tracks" && value !== "") {
		records[id][prop].push(value);
	} else if (value === "") {
		delete records[id][prop];
	}
	return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
