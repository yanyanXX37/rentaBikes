// script.js

function goTo(screenId){

  const screens = document.querySelectorAll('.screen');

  screens.forEach(screen=>{
    screen.classList.remove('active');
  });

  document.getElementById(screenId).classList.add('active');
}

function fakeScan(){

  setTimeout(()=>{
    goTo('form');
  },1000);

}

function submitRental(){

  goTo('success');

  startTimer();

}

function startTimer(){

  let hours = 1;
  let minutes = 0;
  let seconds = 0;

  const timer = document.getElementById('timer');

  setInterval(()=>{

    if(seconds === 0){

      if(minutes === 0){

        if(hours === 0){
          return;
        }

        hours--;
        minutes = 59;
        seconds = 59;

      } else {

        minutes--;
        seconds = 59;

      }

    } else {

      seconds--;

    }

    timer.innerHTML =
      String(hours).padStart(2,'0') + ":" +
      String(minutes).padStart(2,'0') + ":" +
      String(seconds).padStart(2,'0');

  },1000);

}
