var initialSize = 16;

$(document).ready(function() {
	createGrid(initialSize);
	runSketch('black');
});

$('#newBlack').on('click', function() {
	newSize = prompt('Please enter the new grid size (1-64)');
	while (newSize < 1 || newSize > 64) {
		alert("That's not a valid input!");
		newSize = prompt('Please enter the new grid size (1-64)');
	}
	$('.square').remove();
	$('.row').remove();
	createGrid(newSize);
	runSketch('black');
});

$('#newColor').on('click', function() {
	newSize = prompt('Please enter the new grid size (1-64)');
	while (newSize < 1 || newSize > 64) {
		alert("That's not a valid input!");
		newSize = prompt('Please enter the new grid size (1-64)');
	}
	$('.square').remove();
	$('.row').remove();
	createGrid(newSize);
	runSketch('color');
});

function runSketch(input) {
	if (input === 'black') {
		blackHighlight();
	} else if (input === 'color') {
		colorHighlight();
	}
}

function createGrid(size) {

	gridWidth = 960 / size;

	for(var row = 0; row < size; row++) {
		for(var column = 0; column < size; column++) {
			$('.container').append('<div class="square"></div>');
		}
		$('.container').append('<div class="row"></div>');
	}

	$('.square').css({'width':gridWidth, 'height':gridWidth});
}

function colorHighlight() {	
	$('.square').on('mouseenter', function() {
		var h = Math.floor((Math.random()*360) + 1);
		randomColor = "hsl(" + h + ", 100%, 50%)";
		$(this).css('background-color', randomColor);
	})
}

function blackHighlight() {
	$('.square').on('mouseenter', function() {
		$(this).css('background-color', 'black');
	});
}

/* Tried this method but it was much too slow*/

/*$(document).ready(function() {
	$('.container').append("<table></table>");

	var tableHolder = "";

	for(row = 0; row < 16; row++) {
		var tableRow = "<tr>";
		for(column = 0; column < 16; column++) {
			tableRow = tableRow.concat("<td></td>");
		}
		tableRow = tableRow.concat("</tr>");
		tableHolder = tableHolder.concat(tableRow);
	}

	$('.container').find('table').append(tableHolder);

	blackHighlight();

});*/