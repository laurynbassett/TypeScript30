const hourHand: HTMLElement = document.querySelector('.hour-hand')
const minuteHand: HTMLElement = document.querySelector('.min-hand')
const secondHand: HTMLElement = document.querySelector('.second-hand')

/**
 * conditionally changes position of hands
 * based on time
 */
function setTime() {
  const currTime = new Date()

  const second = currTime.getSeconds()
  const secondDegrees = second * 6 + 90 // 6 deg per sec
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  // prevent weird transition b/w 60 & 0 secs
  if (secondDegrees === 90) {
    secondHand.classList.add('no-transition')
  } else {
    secondHand.classList.remove('no-transition')
  }

  const minute = currTime.getMinutes()
  const minuteDegrees = minute * 6 + second * 0.1 + 90 // 6 deg per min => 0.1 deg per sec (on min hand)
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  // prevent weird transition b/w 60 & 0 mins
  if (minuteDegrees === 90) {
    minuteHand.classList.add('no-transition')
  } else {
    minuteHand.classList.remove('no-transition')
  }

  const hour = currTime.getHours()
  let hourDegrees = hour * 30 + minute * 0.5 + 90 // 30 deg per hour => 0.5 deg per min
  hourDegrees = hour > 12 ? Math.abs(360 - hourDegrees) : hourDegrees // if hour is > 12 subtract from 360 to get the portion w/ 12
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  // prevent weird transition b/w 60 & 0 hours
  if (hourDegrees === 90) {
    hourHand.classList.add('no-transition')
  } else {
    hourHand.classList.remove('no-transition')
  }
}

setInterval(setTime, 1000)
