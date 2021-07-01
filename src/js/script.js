$(document).ready(function(){
	$('.carousel__inner').slick({
	   speed: 500,
		//adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: true,
					arrows: false,
					dotsClass: 'slick-dots'
				}
		  },
		]
	});
});
