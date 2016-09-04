$(document).ready(function() {
	$('#expNav ul li').click(function() {
		// remove current selection
		$('#expNav ul li').removeClass('active');
		$('.expContent').removeClass('selectedContent')

		// add new selection
		var num = $(this).attr('data-link');
		$(this).addClass('active');
		$('#exp' + num).addClass('selectedContent');
	});
});