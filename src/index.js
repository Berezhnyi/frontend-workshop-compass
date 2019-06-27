import $ from 'jquery';

function gotCompassReading (reading) {
	$('.value').text(reading.magneticHeading);
}