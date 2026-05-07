// script.js

function goTo(screen) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  document.getElementById(screen).classList.add('active');
  window.scrollTo(0, 0);
}

function simulateScan() {
  setTimeout(() => {
    goTo('rental-form');
  }, 1000);
}

function submitRental() {
  goTo('success');
  startTimer();
}

function startTimer() {
  let h = 2, m = 0, s = 0;
  const timer = document.getElementById('timer');
  setInterval(() => {
    if (s === 0) {
      if (m === 0) {
        if (h === 0) return;
        h--; m = 59; s = 59;
      } else {
        m--; s = 59;
      }
    } else {
      s--;
    }
    timer.innerHTML =
      String(h).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');
  }, 1000);
}

function openModal(type) {
  const modal   = document.getElementById('modalBg');
  const content = document.getElementById('modalContent');

  if (type === 'available') {
    content.innerHTML = `
      <h2 style="margin-bottom:18px;">Bike 101</h2>
      <div class="modal-row"><span>Status</span><b>Available</b></div>
      <div class="modal-row"><span>Condition</span><b>Ready for Rental</b></div>
      <div class="modal-row"><span>Last Borrower</span><b>Joshua Rivera</b></div>
    `;
  }

  if (type === 'rented') {
    content.innerHTML = `
      <h2 style="margin-bottom:18px;">Bike 102</h2>
      <div class="modal-row"><span>Borrowed By</span><b>Ashley Mendoza</b></div>
      <div class="modal-row"><span>Borrow Time</span><b>2:00 PM</b></div>
      <div class="modal-row"><span>Expected Return</span><b>4:00 PM</b></div>
      <div class="modal-row"><span>Status</span><b>Active Rental</b></div>
      <button class="primary-btn" onclick="toggleID()" style="margin-top:10px;">
        View Borrower ID
      </button>
      <div id="idContainer" style="display:none;margin-top:15px;">
        <div style="background:#f5fbf8;padding:30px;border-radius:18px;text-align:center;color:#6f8d84;font-size:14px;">
          🪪 Borrower ID File Preview
        </div>
      </div>
    `;
  }

  if (type === 'maintenance') {
    content.innerHTML = `
      <h2 style="margin-bottom:18px;">Bike 103</h2>
      <div class="modal-row"><span>Status</span><b>Under Maintenance</b></div>
      <div class="modal-row"><span>Issue</span><b>Flat rear tire</b></div>
      <div class="modal-row"><span>Updated By</span><b>Admin</b></div>
    `;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalBg').style.display = 'none';
}

function toggleID() {
  const container = document.getElementById('idContainer');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

// ── REPORT FLOW ──────────────────────────────────────────
const reportTitles = {
  damage:  'Report Damage',
  missing: 'Report Missing Bike',
  other:   'Other Issue',
};

function openReportForm(type) {
  document.getElementById('reportFormTitle').textContent = reportTitles[type] || 'Report Issue';
  document.getElementById('reportBikeId').value = '';
  document.getElementById('reportDesc').value   = '';
  goTo('report-form');
}

function submitReport() {
  const bikeId = document.getElementById('reportBikeId').value.trim();
  const desc   = document.getElementById('reportDesc').value.trim();

  if (!bikeId || !desc) {
    alert('Please fill in Bike ID and description.');
    return;
  }

  goTo('home');
  showToast('✅ Report submitted!');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── LIVE CLOCK ───────────────────────────────────────────
function updateTime() {
  const now = new Date();
  let h = now.getHours();
  const m      = String(now.getMinutes()).padStart(2, '0');
  const suffix = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('liveTime').textContent = h + ':' + m + ' ' + suffix;
}

setInterval(updateTime, 1000);
updateTime();
