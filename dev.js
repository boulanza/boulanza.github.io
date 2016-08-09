// repeat function from: 
// http://stackoverflow.com/questions/202605/repeat-string-javascript
String.prototype.repeat = function(count) {
	if (count < 1) return '';
	var result = '', pattern = this.valueOf();
	while (count > 1) {
		if (count & 1) result += pattern;
		count >>= 1, pattern += pattern;
	}
	return result + pattern;
}

$(document).ready(function() {
	$('#expNav ul li').click(function() {
		// remove current selection
		$('#expNav ul li').removeClass('selectedLink');
		$('.expContent').removeClass('selectedContent')

		// add new selection
		var num = $(this).attr('data-link');
		$(this).addClass('selectedLink');
		$('#exp' + num).addClass('selectedContent');
	});
	$('.skill').each(function() {
		var level = $(this).attr('data-level');
		var colorBox = '<span class="colorBox"></span>';
		var grayBox = '<span class="grayBox"></span>';
		$(this).html(colorBox.repeat(level) + grayBox.repeat(5-level));
	});
});