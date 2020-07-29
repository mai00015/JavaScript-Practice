
// Get query selector
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate(){

    // Get Date
    const now = new Date();

    // Get Seconds from Date and set up the transition
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get Minutes from Date and set up the transition
    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Get Hours from Date and set up the transition
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();