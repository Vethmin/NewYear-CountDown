const newYear = "1 Jan 2024";

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate)/10;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
   const seconds = Math.floor(totalSeconds) % 60;

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
}

countdown();