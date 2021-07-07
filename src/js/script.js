//const { on } = require("gulp");
$(document).ready(function () {
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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
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

	// Modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
	$('.button-mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	// Работа с формами
	//$('#consultation-form').validate();
	//$('#consultation form').validate({
	//	rules: {
	//		name: {
	//			required: true,
	//			minlength: 2
	//		},
	//		phone: "required",
	//		email: {
	//			required: true,
	//			email: true
	//		}
	//	},
	//	messages: {
	//		name: {
	//			required: "Пожалуйста, введите свое имя",
	//			minlength: jQuery.validator.format("Минимальное количество символов {0} !")
	//		},
	//		phone: "Пожалуйста, введите свой номер телефона",
	//		email: {
	//			required: "Пожалуйста, укажите свою почту",
	//			email: "Неправильно введен адрес почты"
	//		}
	//	}});
	//$('#order form').validate();

	function valideForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Минимальное количество символов {0} !")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, укажите свою почту",
					email: "Неправильно введен адрес почты"
				}
		}});
	};
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');
	
	$('input[name=phone]'). mask ("+7 (999) 999-9999");

});
