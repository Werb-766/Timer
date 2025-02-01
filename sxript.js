function updateTimer() {
    const now = new Date();
    document.getElementById("hours").innerText = String(now.getHours()).padStart(2, '0');
    document.getElementById("minutes").innerText = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("seconds").innerText = String(now.getSeconds()).padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();