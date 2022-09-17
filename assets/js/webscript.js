
var someDate = new Date();
var numberOfDaysToAdd = 2;
var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
const countDownDate = result;
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days_text").innerHTML = days;
    document.getElementById("hours_text").innerHTML = hours;
    document.getElementById("minutes_text").innerHTML = minutes;
    document.getElementById("seconds_text").innerHTML = seconds;
   
}, 1000);