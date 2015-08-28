var initialSize = 64;

$(document).ready(function() {
	createGrid(initialSize);
	blackHighlight();
});

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

function blackHighlight() {
	$('.square').on('mouseenter', function() {
		$(this).addClass('highlight');
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