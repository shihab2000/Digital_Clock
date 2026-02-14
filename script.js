const time = document.getElementById('time');
const timeformat = document.getElementById("timeformat");
const dateDisplay = document.getElementById('date'); 
document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    let format = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12;

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr}:${min}:${secs}`;
    timeformat.innerHTML = format;

     let year = now.getFullYear();
    
    // এখানে তুমি add করবে
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let dayName = days[now.getDay()];       // আজকের দিন
    let monthName = months[now.getMonth()]; // আজকের মাস
    let day = String(now.getDate()).padStart(2, "0");

    dateDisplay.textContent = `${dayName}, ${day} ${monthName} ${year}`;
};
