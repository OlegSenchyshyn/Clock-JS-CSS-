const secondsHand = document.querySelector('.second-hand'),
  minutesHand = document.querySelector('.minute-hand'),
  hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds(),
    secondsDeg = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes(),
    minutesDeg = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours(),
    hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  if (secondsHand.style.transform === `rotate(90deg)`) {
    secondsHand.style.transition = 'rotate(180deg)';
  }
}

setInterval(setDate, 1000);
