window.onload = function(){
var Interval;
let appendminutes = document.getElementById('minutes');
let appendtens = document.getElementById('tens');
let appendseconds = document.getElementById('seconds');
var minutes = 00;
var tens = 00;
var seconds = 00;
let timeReset = document.getElementById('button-reset');
let timeStart = document.getElementById('button-start');
let timeEnd = document.getElementById('button-stop');


timeStart.onclick = function(){
  clearInterval(Interval);
  Interval = setInterval(StartTimer,10);
}

function StartTimer(){
  tens++;
  if(tens<=9){
    appendtens.innerHTML = '0' + tens;
  }
  if(tens>9){
    appendtens.innerHTML = tens;
  }
  if(tens>99){
    seconds++;
    tens = 00;
    appendseconds.innerHTML = '0' + seconds;
  }
  if(seconds>9 && seconds<=58){
    
    
    appendseconds.innerHTML = seconds;
  }
  if(seconds==59){
    minutes++;
    seconds = 00;
    tens = 00;
    appendminutes.innerHTML = '0' + minutes;
    appendseconds.innerHTML = '0' + seconds;
  }
}
timeEnd.onclick = function(){
  clearInterval(Interval);
}
timeReset.onclick = function(){
  clearInterval(Interval);
  tens = 00;
  seconds = 00;
  appendseconds.innerHTML = '0' + seconds;
  appendtens.innerHTML = '0' + tens;
}
}