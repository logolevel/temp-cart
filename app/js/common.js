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

	/*tabs*/
	$('.progress-nav__dot').click(function(){
		var tab_id = $(this).attr('data-step');

		$('.progress-nav__dot').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+ "step-" + tab_id).addClass('current');
	});

});
