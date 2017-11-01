$(document).ready(function() {
	$(".b-header-menu__left").click(function() {
		$(".b-header-menu__left_sidebarMenu").toggle(200);
	});

	$(".b-carousel-a").owlCarousel({
		items: 1,
	});

	$(".b-carousel-b").owlCarousel({
		items: 1,
		nav: true,
		navText: ['', '']
	});

	$(".b-carousel-c").owlCarousel({
		items: 1
	});

	$(".b-carousel-d").owlCarousel({
		items: 1,
		nav: true,
		navText: ['', '']
	});

	$(".b-carousel-e").owlCarousel({
		items: 4,
		nav: true,
		navText: ['', '']
	});

	$(".b-carousel-f").owlCarousel({
		items: 1,
		nav: true,
		navText: ['', '']
	});
	$(".b-carousel-g").owlCarousel({
		items: 4,
		nav: true,
		navText: ['', '']
	});
	$(".b-carousel-h").owlCarousel({
		items: 4,
		nav: true,
		navText: ['', '']
	});

	$('#clock').countdown('2020/10/10').on('update.countdown', function(event) {
	  var $this = $(this).html(event.strftime(''
	    + '<div class="b-clock_countdown"> <span class="b-clock_countdown-value">%-d</span> <br> <span class="b-clock_countdown-text">Day%!d</span> </div> '
	    + '<div class="b-clock_countdown"> <span class="b-clock_countdown-value">%H</span> <br> <span class="b-clock_countdown-text">Hrs</span> </div> '
	    + '<div class="b-clock_countdown"> <span class="b-clock_countdown-value">%M</span> <br> <span class="b-clock_countdown-text">Mins</span> </div> '
	    + '<div class="b-clock_countdown"> <span class="b-clock_countdown-value">%S</span> <br> <span class="b-clock_countdown-text">Sec</span> </div> '));
	});

	$('.b-content__rating_stars').each(function() {
		var parent = $(this);
		$('.b-content__rating-star', parent).hover(function() {
			var index = $(this).index();
			var before = $('.b-content__rating-star', parent).slice(0, index + 1);
			var after = $('.b-content__rating-star', parent).slice(index + 1);

			before.addClass('b-content__rating-star_active');
			after.removeClass('b-content__rating-star_active');
		});
		$('.b-content__rating-star', parent).click(function() {
			var index = $(this).index();
			var id = $(this).parents('[data-id]').data('id')

			console.log(index, id);
		})
	})
});
