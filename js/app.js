/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	'use strict';
	var sliderLength = $("#slide-dots li").length,
		curSlide = $('.active'),
		slideIndex = curSlide.parent('li').index() + 1,
		nextSlide,
		imageHttp = '',
		slides = {
			'1' : 'http://www.volunteer.ie/images/cache/images/blog/student3_1_720_320_c1.jpg',
			'2' : "https://tickets.pontio.co.uk/ArticleMedia/Images/Volunteering/Volunteering_Hands1170x500.png",
			'3' : "http://centrestage.org/sites/default/files//volunteer_final.png",
			'4' : "https://c.fastcompany.net/multisite_files/coexist/imagecache/1280/article_feature/1280-reimagining-the-volunteer-center_0.jpg"
		};
	function slideSwap() {
		$('#slide-dots li a').removeClass('active');
		imageHttp = slides[slideIndex];
		$('#banner').css('background-image', 'linear-gradient(rgba(221, 130, 127, 0.6), rgba(221, 130, 127, 0.6)), url("' + imageHttp + '")');
		nextSlide = slideIndex - 1;
		$('#slide-dots li').eq(nextSlide).find('a').addClass('active');
	}
	$(document).scroll(function () {
		if ($('#sticker-sticky-wrapper').hasClass('.is-sticky')) {
			$('.is-sticky #sticker .secondary-nav').show();
		} else {
			$('.secondary-nav').hide();
		}
	});
	$('.menu-click').click(function (e) {
		e.preventDefault();
		if ($('.is-sticky #sticker .secondary-nav').is(':visible')) {
			$('.is-sticky #sticker .secondary-nav').hide();
		} else {
			$('.is-sticky #sticker .secondary-nav').show();
		}
	});
	$('#slide-dots li').click(function (e) {
		e.preventDefault();
		$('#slide-dots li').find('a').removeClass('active');
		$(this).find('a').addClass('active');
		var index = $(this).index() + 1;
		imageHttp = slides[index];
		$('#banner').css('background-image', 'linear-gradient(rgba(221, 130, 127, 0.6), rgba(221, 130, 127, 0.6)), url("' + imageHttp + '")');
	});
	$('.next').click(function () {
		if (slideIndex < sliderLength) {
			slideIndex += 1;
		} else {
			slideIndex = 1;
		}
		slideSwap();
	});
	$('.prev').click(function () {
		if (slideIndex > 1) {
			slideIndex -= 1;
		} else {
			slideIndex = 4;
		}
		slideSwap();
	});
});