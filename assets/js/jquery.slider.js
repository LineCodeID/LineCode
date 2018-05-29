$(function($) {
	$('.slider').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
    transition : 2000, // Length (in milliseconds) of the fade transition.
    speed : 6000, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
	});
});
