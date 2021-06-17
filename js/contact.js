function nameValid() {
  let nameVal = document.getElementById("nameInput").value;
  if (nameVal.trim().length < 2 || !/^[A-Za-z]*$/.test(nameVal)) {
    document.querySelector(".nameInputClass").classList.remove("valid");
    document.querySelector(".nameInputClass").classList.add("invalid");
  } else {
    document.querySelector(".nameInputClass").classList.remove("invalid");
    document.querySelector(".nameInputClass").classList.add("valid");
  }
}

function ageValid() {
  let ageVal = document.getElementById("ageInput").value;
  if (
    Number(ageVal.trim()) > 17 &&
    Number(ageVal.trim()) < 110 &&
    /^[0-9]*$/.test(ageVal)
  ) {
    document.querySelector(".ageInp").classList.add("valid");
    document.querySelector(".ageInp").classList.remove("invalid");
  } else {
    document.querySelector(".ageInp").classList.add("invalid");
    document.querySelector(".ageInp").classList.remove("valid");
  }
}

function emailValid() {
  let checkRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValue = document.getElementById("emailInput").value;

  if (checkRegex.test(emailValue)) {
    document.querySelector(".emailInp").classList.add("valid");
    document.querySelector(".emailInp").classList.remove("invalid");
  } else {
    document.querySelector(".emailInp").classList.remove("valid");
    document.querySelector(".emailInp").classList.add("invalid");
  }
}

// notification code

let notifCloseBtn = document.getElementById("notifCloseBtnId");
let contactSubmit = document.getElementById("contactSubmitBtnId");
let notificationBar = document.getElementById("notificationId");

let nameInp = document.getElementById("nameInput");
let ageInp = document.getElementById("ageInput");
let emailInp = document.getElementById("emailInput");
let submitText = document.getElementById("notifySubmitId");
let errText = document.getElementById("notifyErrId");

notifCloseBtn.addEventListener("click", function () {
  notificationBar.style.display = "none";
});

contactSubmit.addEventListener("click", function () {
  if (
    nameInp.classList.contains("valid") &&
    ageInp.classList.contains("valid") &&
    emailInp.classList.contains("valid")
  ) {
    errText.style.display = "none";
    submitText.style.display = "inline-block";
    notificationBar.style.display = "block";
  } else {
    errText.style.display = "inline-block";
    submitText.style.display = "none";
    notificationBar.style.display = "block";
  }
});
