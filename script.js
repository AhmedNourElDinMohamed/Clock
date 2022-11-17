let hoursArm = document.querySelector(".hours");
let minuteArm = document.querySelector(".minute");
let secondArm = document.querySelector(".second");
let clock = document.querySelector(".clock");
let secondsSound = 


setInterval(function(){
    let Time = new Date();
    let hours = Time.getHours();
    let minutes = Time.getMinutes();
    let seconds = Time.getSeconds();
    hoursArm.style.transform = `rotate(${(hours*30) + (minutes/2)}deg)`;
    minuteArm.style.transform = `rotate(${(minutes * 6)}deg)`;
    secondArm.style.transform = `rotate(${(seconds * 6)}deg)`;
    clock.classList.toggle("chang-backgroundColor");

    /* Screen Clock*/
    // Convert From 24h To 12h
    (Time.getHours()) > 12 ? night.textContent = "PM" : night.textContent = "Am";
    hour.textContent = String(Time.getHours() % 12).padStart(2, '0');
    // Min
        min.textContent = sec.textContent = String(Time.getMinutes()).padStart(2, '0');
    // Sec
    sec.textContent = String(Time.getSeconds()).padStart(2, '0')
    
    month.textContent = Time.toLocaleString("en-us",{month:"short"});
    year.textContent = Time.getFullYear();

    playAudio();
},1000)

function playAudio() { 
    document.getElementById("second-sound").play();
  } 

  var sec = document.getElementById("sec")
  var min = document.getElementById("min");
  var hour = document.getElementById("hour");
  var month = document.getElementById("month");
  var year = document.getElementById("year");
  var night = document.getElementById("time");
  
  setInterval(function() {
      
  },1000)