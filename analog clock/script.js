  let hour=document.getElementById('hr');
  let minute=document.getElementById('min');
  let second=document.getElementById('sec');

  function display(){
let date=new Date();

let h=date.getHours();
let m=date.getMinutes();
let s= date.getSeconds();

let hoursrotation=30*h+m/2;
let minutesrotation=6*m;
let secondsrotation=6*s;

hour.style.transform = `rotate(${hoursrotation}deg)`;
minute.style.transform = `rotate(${minutesrotation}deg)`;
second.style.transform = `rotate(${secondsrotation}deg)`;
  }

  setInterval(display,1000);