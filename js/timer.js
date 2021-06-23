let setTimeBtn = document.getElementById("setTimeBtnId");
let timerDiv = document.getElementById("timerDivId");
let minutes = document.getElementById("minutesId");
let seconds = document.getElementById("secondsId");
let btnsDiv = document.getElementById("btnsDivId");

let pause = document.createElement("button");
pause.innerText = "pause";
pause.setAttribute("id", "pauseBtnId");

let stop = document.createElement("button");
stop.innerText = "stop";
stop.setAttribute("id", "stopBtnId");

let reset = document.createElement("button");
reset.innerText = "reset";
reset.setAttribute("id", "resetBtnId");

setTimeBtn.addEventListener("click", function () {
  let pauseBool = true;
  let mins = minutes.value;
  let secs = seconds.value;

  btnsDiv.appendChild(pause);
  btnsDiv.appendChild(stop);
  btnsDiv.appendChild(reset);

  let timerInt = setInterval(function () {
    secs--;
    timerDiv.textContent = mins + ":" + secs;
  }, 1000);

  if (seconds.value < 60 && seconds.value >= 0) {
    timerDiv.textContent = mins + ":" + secs;
  } else {
    timerDiv.textContent = "Please write time properly";
    clearInterval(timerInt);
  }

  pause.addEventListener("click", function () {
    if (pauseBool === true) {
      clearInterval(timerInt);
      pauseBool = false;
      pause.innerText = "play";
    } else {
      timerInt = setInterval(function () {
        secs--;
        timerDiv.textContent = mins + ":" + secs;
      }, 1000);
      pauseBool = true;
      pause.innerText = "pause";
    }
  });

  stop.addEventListener("click", function () {
    clearInterval(timerInt);
    timerDiv.textContent = "0:00";
  });

  reset.addEventListener("click", function () {
    mins = minutes.value;
    secs = seconds.value;
    timerDiv.textContent = mins + ":" + secs;
  });
});
