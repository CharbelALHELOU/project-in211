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

const typewriter = new Typewriter('#msg', {
loop: false, delay: 60,
});

typewriter.changeCursor(' ').typeString('Charbel Alhelou').start();

const t2 = new Typewriter('#msg2', {loop:false,delay:60})
t2.changeCursor(' ').pauseFor(2000).typeString('A 4th year student at ENSTA Paris').start();

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});
