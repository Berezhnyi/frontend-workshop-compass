let scaler = document.querySelector('.scale');
let degreeValue = document.querySelector('.value');
let direction = document.querySelector('.direction');

function handleOrientation (event) {
	let degrees = event.alpha;

	degreeValue.innerHTML = degrees.toFixed(0);
	scaler.setAttribute('style', `transform: rotate(${degrees.toFixed(0) - 270}deg)`);
	if (degrees > 45 && degrees < 135) {direction.innerHTML = 's';}
	if (degrees > 135 && degrees < 225) {direction.innerHTML = 'e';}
	if (degrees > 225 && degrees < 315) {direction.innerHTML = 'n';}
	if (degrees > 315 && degrees < 360 || degrees > 0 && degrees < 45) {direction.innerHTML = 'w';}
}
window.addEventListener('deviceorientation', handleOrientation);


// direction.innerHTML = 'some crap';
