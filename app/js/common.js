$(function() {

	/*progress-nav*/
	$('.progress-nav__dot').on('click', function(){
		if ( $(this).hasClass('active') ) {
			$(this)
				.removeClass('success')
				.nextAll('.progress-nav__dot')
				.removeClass('active success');
			$(this)
				.nextAll('.progress-nav__line')
				.removeClass('success');

		} else {
			$(this)
				.addClass('active')
				.prevAll('.progress-nav__dot')
				.addClass('active success');
			$(this)
				.prevAll('.progress-nav__line')
				.addClass('success');
		}
	});

});
