particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Welcome to the other side!');
});

var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene, {
	invertX: true,
	invertY: true,
	frictionX: 0.2,
	frictionY: 0.2
});