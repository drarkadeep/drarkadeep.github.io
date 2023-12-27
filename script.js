function isTouchDevice() {
	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}

particlesJS.load('particles-js', 'particles.json', function () {
	console.log('Welcome to the other side!');
});

if (isTouchDevice()) 
{
	var scene = document.getElementById('parallax');
	var parallaxInstance = new Parallax(scene, {
		frictionX: 0,
		frictionY: 0
	});
} else {
	var scene = document.getElementById('parallax');
	var parallaxInstance = new Parallax(scene, {
		invertX: true,
		invertY: true,
		frictionX: 0.2,
		frictionY: 0.2
	});
}