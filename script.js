const hour = document.querySelector(".container .time .hour");
const minute = document.querySelector(".container .time .minute");
const second = document.querySelector(".container .time .second");
const count = document.querySelector(".container .time .count");
const start = document.querySelector(".container .button .start");
const pause = document.querySelector(".container .button .pause");
const reset = document.querySelector(".container .button .reset");

let jam = 0;
let menit = 0;
let detik = 0;
let hitung = 0;
const timerStart = () => {
  if (isTrue) {
    hitung++;

    if (hitung == 100) {
      detik++;
      hitung = 0;
    }
    if (detik == 60) {
      menit++;
      detik = 0;
    }
    if (menit == 60) {
      jam++;
      menit = 0;
    }

    let hr = jam;
    let mnt = menit;
    let sc = detik;
    let cnt = hitung;
    if (jam < 10) {
      hr = "0" + hr;
    }
    if (menit < 10) {
      mnt = "0" + mnt;
    }
    if (detik < 10) {
      sc = "0" + sc;
    }
    if (hitung < 10) {
      cnt = "0" + cnt;
    }

    hour.innerHTML = hr;
    minute.innerHTML = mnt;
    second.innerHTML = sc;
    count.innerHTML = cnt;

    setTimeout(timerStart, 5);
  }
};

start.addEventListener("click", () => {
  isTrue = true;
  timerStart();
});

pause.addEventListener("click", () => {
  isTrue = false;
  timerStart();
});

reset.addEventListener("click", () => {
  isTrue = false;
  timerStart();

  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
  count.innerHTML = "00";

  jam = 0;
  menit = 0;
  detik = 0;
  hitung = 0;
});
