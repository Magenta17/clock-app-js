

function padZero(number) {
    return (number < 10 ? "0" : "") + number
}

function formateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 0;

    clockTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`

    document.getElementById("clock").textContent = clockTime;
}

formateTime()
setInterval(formateTime, 1000)




