/*global $, alert, console */

$(function () {
	'use strict';
	var myHeader = $('.header'), mySlider = $('.bxslider');
	myHeader.height($(window).height() - 70);
	$(window).resize(function () {
		myHeader.height($(window).height() - 70);
	});
	// Trigger The Bx Slider
  $('.bxslider').bxSlider({
		pager: false,
		auto: true
	});
	// links add active class
	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	// Smooth Scroll To div
	$('.links li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});
	$('.bxslider li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});
	// trigger nicescroll 
	$('html').niceScroll({
		cursorcolor: '#1abc9c',
		cursorwidth: '10px',
		cursorborder: 'none'
	});
	
		// trigger mixitUp 
	$('#container').mixItUp();
	
	// Adjust Shuffle links
	
	$('.shuffle li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// Our auto slider Code
	
	(function autoSlider() {
		$('.slider .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
				});
			}
		});
	}());
	
	// our register section
	$('.comming-camps .camp button').click(function () {
		$('.register').css("display", "block");
	});
	
	$('.register .data-for-enroll button').click(function () {
		$('.register').css("display", "none");
	});
});