try {
	Typekit.load();
} catch (e) {}

jQuery(document).ready(function ($) {
	// Slider
	$('.royalSlider').royalSlider({
		autoHeight: true,
		arrowsNav: false,
		sliderDrag: false,
		navigateByClick: false,
		slidesOrientation: 'vertical',
		keyboardNavEnabled: true,
		slidesSpacing: 0,
	});

	$('.next-slide').click(function (event) {
		event.preventDefault();
		slider.next();
	});

	var slider = $('.royalSlider').data('royalSlider');

	slider.ev.on('rsAfterSlideChange', function (event) {
		$('#floating-signup').attr(
			'class',
			'current-slide-' + (slider.currSlideId + 1)
		);
	});

	var goPrev = 0;
	var goNext = 0;

	$(window).bind('mousewheel', function (event) {
		if (event.originalEvent.wheelDelta >= 0) {
			goNext = 0;
			goPrev = goPrev + 1;
			if (goPrev <= 1) {
				slider.prev();
			}
		} else {
			goPrev = 0;
			goNext = goNext + 1;
			if (goNext <= 1) {
				slider.next();
			}
		}

		clearTimeout($.data(this, 'timer'));
		$.data(
			this,
			'timer',
			setTimeout(function () {
				goNext = 0;
				goPrev = 0;
			}, 100)
		);
	});
});
