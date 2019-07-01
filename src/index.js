function spinScale (degrees) {
	let scaler = document.querySelector('.scale');
	const FIXSCALE = 270;

	scaler.setAttribute('style', `transform: rotate(${degrees.toFixed(0) - FIXSCALE}deg)`);
}

function displayDegrees (degrees) {
	let degreeValue = document.querySelector('.value');
	const FIXANGLE = 90;

	degreeValue.innerHTML = (degrees.toFixed(0) + FIXANGLE);
}

function displayDirection (degrees) {
	let direction = document.querySelector('.direction');

	if (degrees > 45 && degrees < 135) {direction.innerHTML = 's';}
	if (degrees > 135 && degrees < 225) {direction.innerHTML = 'e';}
	if (degrees > 225 && degrees < 315) {direction.innerHTML = 'n';}
	if (degrees > 315 && degrees < 360 || degrees > 0 && degrees < 45) {direction.innerHTML = 'w';}
}

function handleOrientation (event) {
	let degrees = event.alpha;

	displayDegrees(degrees);
	spinScale(degrees);
	displayDirection(degrees);
}
window.addEventListener('deviceorientation', handleOrientation);