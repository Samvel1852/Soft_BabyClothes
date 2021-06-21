let setTimeBtn = document.getElementById("setTimeBtnId");
let timerDiv = document.getElementById("timerDivId");
let minutes = document.getElementById("minutesId");
let seconds = document.getElementById("secondsId");

setTimeBtn.addEventListener("click", function () {
  if (seconds.value < 60 && seconds.value >= 0) {
    timerDiv.textContent = minutes.value + ":" + seconds.value;
  } else {
    timerDiv.textContent = "Please write time properly";
  }

  let pause = document.createElement("button");
  pause.innerText = "pause";
  timerDiv.appendChild(pause);

  let stop = document.createElement("button");
  stop.innerText = "stop";
  timerDiv.appendChild(stop);

  let reset = document.createElement("button");
  reset.innerText = "reset";
  timerDiv.appendChild(reset);

  setInterval(function () {
    timerDiv.textContent;
  }, 1000);
});
