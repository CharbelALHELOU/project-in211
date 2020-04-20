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


  const typewriter = new Typewriter('#msg', {
	loop: false, delay: 60,
  });

  typewriter.changeCursor(' ').typeString('Hello!').deleteAll().typeString('Charbel Alhelou').start();

  const t2 = new Typewriter('#msg2', {loop:false,delay:60})
  t2.changeCursor(' ').pauseFor(2000).typeString('A 4th year student at ENSTA Paris').start();