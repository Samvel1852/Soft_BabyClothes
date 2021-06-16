function mobileNavbar() {
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
}
