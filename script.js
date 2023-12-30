tsParticles
    .load({
        id: "tsparticles",
        url: "particles.json",
    });

function isTouchDevice() {
	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
	console.log("In hindi, rather hinglish, 'console.log' means 'calm the people'");
} else {
	var scene = document.getElementById('parallax');
	var parallaxInstance = new Parallax(scene, {
		invertX: true,
		invertY: true,
		frictionX: 0.2,
		frictionY: 0.2
	});
}
