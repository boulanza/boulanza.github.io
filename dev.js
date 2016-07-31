$(document).ready(function() {
	$('#expNav ul li').click(function() {
		// remove current selection
		$('#expNav ul li').removeClass('selectedLink');
		$('.expContent').removeClass('selectedContent')

		// add new selection
		var num = $(this).attr('data-link');
		$(this).addClass('selectedLink');
		$('#exp' + num).addClass('selectedContent');
	})
})