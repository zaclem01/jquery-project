/*$(document).ready(function() {
	for(var row = 0; row < 16; row++) {
		$('.container').append('<div class="row' + row + '"></div>')
		for(var column = 0; column < 16; column++) {
			$('.container').find('.row' + row).append('<div class="grid">t</div>');
		}
	}
});*/

$(document).ready(function() {
	$('.container').append("<table></table>");
	for(row = 0; row < 16; row++) {
		var tableRow = "<tr>";
		for(column = 0; column < 16; column++) {
			tableRow = tableRow.concat("<td>t</td>");
		}
		tableRow = tableRow.concat("</tr>");
		var toAppend = $(tableRow);
		$('.container').find('table').append(toAppend);
	}
});