$(function () {
	$('.hamburger-menu').on('click', function () {
		$('.toggle').toggleClass('open');
		$('.nav-list').toggleClass('open');
	});
	
	$('.nav-list a').on('click', function () {
	    $('.toggle').removeClass('open');
	    $('.nav-list').removeClass('open');
	});
	
	AOS.init({
		easing: 'ease',
		duration: 1000,
	});
});

function scrollToID( theID ) {
    document.querySelector(theID).scrollIntoView({behavior: 'smooth'});
  }
