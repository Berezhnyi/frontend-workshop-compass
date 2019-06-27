import $ from 'jquery';

let scaler = document.querySelector('.scale');
let degreeValue = document.querySelector('.scale');

// if (window.DeviceOrientationEvent) {
// 	window.addEventListener('deviceorientation', function (event) {
// 		// alpha: rotation around z-axis
// 		let rotateDegrees = event.alpha;

// 		// gamma: left to right
// 		// let leftToRight = event.gamma;

// 		// beta: front back motion
// 		// let frontToBack = event.beta;

// 		handleOrientationEvent(rotateDegrees);
// 	}, true);
// }

// let handleOrientationEvent = function (rotateDegrees) {
// 	degreeValue.innerHTML = rotateDegrees;
// };

function handleOrientation (event) {
	let degrees = event.alpha;

	degreeValue.innerHTML = degrees;
}
window.addEventListener('deviceorientation', handleOrientation);
