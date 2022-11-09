document.addEventListener('DOMContentLoaded', function(){

	const menuOpener = document.querySelector('.menu-opener');
	const mobileTopNav = document.querySelector('.sgr-menu-mobile');
	const overlay = document.querySelector('.sgr-overlay');

	const closeLink = document.querySelector('.icon-close-link');

	menuOpener.addEventListener('click', function(e){
		e.preventDefault();

		overlay.classList.toggle('sgr-overlay--active');
		mobileTopNav.classList.toggle('sgr-menu-mobile--opened');
	});

	closeLink.addEventListener('click', function(e){
		e.preventDefault();

		overlay.classList.remove('sgr-overlay--active');
		mobileTopNav.classList.remove('sgr-menu-mobile--opened');
	});

	$('.menu-item-has-children').click(function() { 
		$(this).toggleClass('show');
		$(this).siblings().removeClass('show'); 
		$('.sub-menu').stop().slideUp();
		$('.show .sub-menu').stop().slideDown();
	});
		
	$(document).click(function(e){ 
		var target = e.target; 
		if (!$(target).is('.menu-item-has-children') && !$(target).parents().is('.menu-item-has-children')) {
			$('.sub-menu').slideUp(); 
			$('.menu-item-has-children').removeClass('show');
		}
	});
});

$(document).ready(function(){
	
	var target = window.location.hash,
		target = target.replace('#', ''),
		mobile = $(window).width() < 768;

	$('.members-slider').slick({
		slidesToShow: 1,
		centerMode: false,
		variableWidth: false,
        dots: true,
        arrows: false,
	});

	$('.members-slider').on('setPosition', function () {
		$(this).find('.slick-slide').height('auto');
		var slickTrack = $(this).find('.slick-track');
		var slickTrackHeight = $(slickTrack).height();
		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
	});

	if(mobile) {
		$('.autoplay').slick({
			arrows: false,
			centerMode: true,
			centerPadding: '-30px',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
		$(".slick-prev").click(function () {
			$(".autoplay").slick("slickPrev");
		});
	
		$(".slick-next").click(function () {
			$(".autoplay").slick("slickNext");
		});
	}
});