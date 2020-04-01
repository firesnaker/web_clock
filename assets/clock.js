setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
	const currentDate = new Date();
	const sec = currentDate.getSeconds() / 60;
	const min = (currentDate.getMinutes() + sec) / 60;
	const hour = ( currentDate.getHours() + min) / 12;

	setRotation(secondHand, sec);
	setRotation(minuteHand, min);
	setRotation(hourHand, hour);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock(); //this to avoid jumping the clock hands from 12 to current time
