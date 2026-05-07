// script.js

function goTo(screen){

  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });

  document.getElementById(screen).classList.add('active');

}

function simulateScan(){

  setTimeout(()=>{
    goTo('rental-form');
  },1000);

}

function submitRental(){

  goTo('success');

  startTimer();

}

function startTimer(){

  let h = 2;
  let m = 0;
  let s = 0;

  const timer = document.getElementById('timer');

  setInterval(()=>{

    if(s === 0){

      if(m === 0){

        if(h === 0){
          return;
        }

        h--;
        m = 59;
        s = 59;

      }else{

        m--;
        s = 59;

      }

    }else{

      s--;

    }

    timer.innerHTML =
      String(h).padStart(2,'0') + ":" +
      String(m).padStart(2,'0') + ":" +
      String(s).padStart(2,'0');

  },1000);

}

function openModal(type){

  const modal = document.getElementById('modalBg');
  const content = document.getElementById('modalContent');

  if(type === 'available'){

    content.innerHTML = `
      <h2>Bike 101</h2>

      <div class="modal-row">
        <span>Status</span>
        <b>Available</b>
      </div>

      <div class="modal-row">
        <span>Condition</span>
        <b>Ready for Rental</b>
      </div>

      <div class="modal-row">
        <span>Last Borrower</span>
        <b>Joshua Rivera</b>
      </div>
    `;

  }

  if(type === 'rented'){

    content.innerHTML = `
      <h2>Bike 102</h2>

      <div class="modal-row">
        <span>Borrowed By</span>
        <b>Ashley Mendoza</b>
      </div>

      <div class="modal-row">
        <span>Borrow Time</span>
        <b>2:00 PM</b>
      </div>

      <div class="modal-row">
        <span>Expected Return</span>
        <b>4:00 PM</b>
      </div>

      <div class="modal-row">
        <span>Status</span>
        <b>Active Rental</b>
      </div>

      <img 
      class="id-preview"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop">
    `;

  }

  if(type === 'maintenance'){

    content.innerHTML = `
      <h2>Bike 103</h2>

      <div class="modal-row">
        <span>Status</span>
        <b>Under Maintenance</b>
      </div>

      <div class="modal-row">
        <span>Issue</span>
        <b>Flat rear tire</b>
      </div>

      <div class="modal-row">
        <span>Updated By</span>
        <b>Admin</b>
      </div>
    `;

  }

  modal.style.display = 'flex';

}

function closeModal(){

  document.getElementById('modalBg').style.display = 'none';

}

function updateTime(){

  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();

  let suffix = h >= 12 ? 'PM' : 'AM';

  h = h % 12;
  h = h ? h : 12;

  m = m < 10 ? '0'+m : m;

  document.getElementById('liveTime').innerHTML =
    h + ':' + m + ' ' + suffix;

}

setInterval(updateTime,1000);

updateTime();
