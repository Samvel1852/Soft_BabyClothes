"use strict";
// Burger Menu
let menuIcon = document.getElementById("menuIconId");

menuIcon.addEventListener("click", function mobileNavbar() {
  let mobileNavbar = document.querySelector(".mobileMenu");
  if (!mobileNavbar.style.display || mobileNavbar.style.display === "none") {
    mobileNavbar.style.display = "flex";
    mobileNavbar.style.width = "100%";
    mobileNavbar.style.height = "80vh";
    mobileNavbar.style.visibility = "visible";
    mobileNavbar.style.position = "fixed";
  } else {
    mobileNavbar.style.display = "none";
    mobileNavbar.style.width = "0";
    mobileNavbar.style.height = "0";
    mobileNavbar.style.visibility = "hidden";
  }
});

//Slider

let prevSlide = document.getElementById("prevBtn");
let nextSlide = document.getElementById("nextBtn");
let count = 0;
let imgs = [
  ["./images/homeWebp.webp", "./images/homeWebp1.webp"],
  ["./images/homeWebp2.webp", "./images/homeWebp3.webp"],
  ["./images/homeWebp4.webp", "./images/homeWebp5.webp"],
];
let img1 = document.getElementById("hotSale1");
let img2 = document.getElementById("hotSale2");

let hotSaleSlide = function () {
  if (count === imgs.length - 1) {
    count = 0;
  } else {
    count += 1;
  }
  [img1.src, img2.src] = imgs[count];
};

let prevHotSaleSlide = function () {
  if (count === 0) {
    count = imgs.length - 1;
  } else {
    count -= 1;
  }
  [img1.src, img2.src] = imgs[count];
};

let intervalSlide = setInterval(() => {
  if (count === imgs.length - 1) {
    count = 0;
  } else {
    count += 1;
  }
  [img1.src, img2.src] = imgs[count];
}, 6000);

prevSlide.addEventListener("click", prevHotSaleSlide);
nextSlide.addEventListener("click", hotSaleSlide);
// prevSlide.addEventListener("click", intervalSlide);
// nextSlide.addEventListener("click", intervalSlide);

// Search input value keeping with url

let searchInput = document.getElementById("searchInp");

searchInput.setAttribute(
  "value",
  window.location.search.slice(window.location.search.indexOf("=") + 1)
);

// notification

let notification = Micro.notify({
  title: "Timed!",
  message: "I'm a timed notification. You only see me for 3 seconds!",
  type: "timed",
  timeShow: 3000,
});

let hotSaleBtn = document.getElementById("hotSaleBtn");

hotSaleBtn.addEventListener("click", notification);
