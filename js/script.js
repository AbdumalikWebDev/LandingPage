const loader = document.querySelector(".loader");
const loaderBox = document.querySelector(".loading-screen");
const tabLabel = document.querySelector(".tab-label");
const plusMinusIcon = document.querySelectorAll(".plus");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const sidebar = document.querySelector(".sidebar");
const body = document.body;
const radioInputs = document.querySelectorAll('input[type="radio"]');
const plusIcons = document.querySelectorAll(".plus");

window.addEventListener("load", function () {
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    loader.style.display = "none";
    loaderBox.style.display = "none";
    document.body.style.overflow = "visible";

    document.body.classList.remove("loading");
  }, 2000);
});
//! for loading screen;

openBtn.addEventListener("click", () => {
  sidebar.style.left = "0%";
  body.style.overflow = "hidden";
  closeBtn.style.transform = "rotateZ(0deg)";
});
closeBtn.addEventListener("click", () => {
  sidebar.style.left = "100%";
  body.style.overflow = "visible";
  closeBtn.style.transform = "rotateZ(90deg)";
});
//! for sidebar;

radioInputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    plusIcons.forEach((icon) => {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    });

    if (input.checked) {
      plusIcons[index].classList.remove("fa-plus");
      plusIcons[index].classList.add("fa-minus");
    }
  });
});
//! for FAQ questions;
