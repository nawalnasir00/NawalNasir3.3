//function to count words
function countWord() {

	// for getting text value 
	var word = document
		.getElementById("word").value;

	// initializing word counter
	var total = 0;

	// separate the words
	var split = word.split(' ');

	// loop to reach all the words and increase count
	for (var n = 0; n < split.length; n++) {
		if (split[n] != "") {
			total += 1;
		}
	}

	//output
	document.getElementById("show")
		.innerHTML = total;
}
