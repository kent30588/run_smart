//const { on } = require("gulp");
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

	 $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
    $(this)
      .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	 });

	function toggleClass(item) {
			$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
			})
		});
	};

	toggleClass('.catalog-item__link');
	toggleClass('.catalog-item__back');
});
