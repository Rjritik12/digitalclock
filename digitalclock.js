alert("kya fayda dekhkar,tumhara time toh waise bhi kharab chal raha hai")
function displayTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = '${hours}:${minutes}:${seconds}';
    document.getElementById("clock").textContent = time;
}
setInterval(displayTime, 1000);

