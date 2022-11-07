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

	$('.dropdown-toggle').click(function() { 
		$(this).next('.dropdown-menu').slideToggle();
		$(this).toggleClass('show');
		$(this).next('.dropdown-menu').toggleClass('show');

	});
		
	$(document).click(function(e){ 
		var target = e.target; 
		if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
			$('.dropdown-menu').slideUp(); 
			$('.dropdown-toggle').removeClass('show');
		}
	});
});

$(document).ready(function(){
	var target = window.location.hash,
		target = target.replace('#', ''),
		mobile = $(window).width() < 992;

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
    
	if (mobile) {
		$('.how-steps').slick({
			slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            dots: false,
            arrows: true,
            centerPadding: '60px',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  centerPadding: '20px',
                  slidesToShow: 1
                }
              }
            ]
		});

		$('.how-steps').on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}
});