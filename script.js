const secondsHand = document.querySelector('.second-hand'),
  minutesHand = document.querySelector('.minute-hand'),
  hourHand = document.querySelector('.hour-hand');

//creating fn to make sure clock updates the seconds/minutes/hour
function setDate() {
  const now = new Date(); //grab the date

  //seconds
  const seconds = now.getSeconds(),
    secondsDeg = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  //minutes
  const minutes = now.getMinutes(),
    minutesDeg = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

  //hours
  const hours = now.getHours(),
    hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  if (secondsHand.style.transform === `rotate(90deg)`) {
    secondsHand.style.transition = 'rotate(180deg)';
  }
}

setInterval(setDate, 1000); //making sure it runs every second
