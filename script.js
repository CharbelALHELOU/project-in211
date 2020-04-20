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

var i = 0;
var txt = 'A 4th year student at ENSTA Paris'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
	document.getElementById("msg").innerHTML += txt.charAt(i);
	i++;
	setTimeout(typeWriter, speed);
}
}

typeWriter();