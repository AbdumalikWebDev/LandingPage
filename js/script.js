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

let signInButton = document.querySelector(".sign-in"),
  signUpButton = document.querySelector(".sign-up"),
  signInContent = document.querySelector(".sign-in-content"),
  signUpContent = document.querySelector(".sign-up-content"),
  emailInput = document.querySelector(".email-input"),
  emailIcon = document.querySelector(".email-icon"),
  eyeIcon = document.querySelector(".eye-icon"),
  passwordInput = document.querySelector(".pass-input"),
  verifyInput = document.querySelector(".verify-input");

signInButton.addEventListener("click", () => {
  signUpButton.style.color = "#cbcbcb";
  signInButton.style.color = "#038be5";
  signUpContent.classList.add("to-right");
  signUpContent.style.display = "none";
  signInContent.style.display = "flex";
});
signUpButton.addEventListener("click", () => {
  signUpButton.style.color = "#038be5";
  signInButton.style.color = "#cbcbcb";
  signUpContent.classList.remove("to-right");
  signInContent.style.display = "none";
  signUpContent.style.display = "flex";
});

eyeIcon.addEventListener("click", () => {
  if (
    passwordInput.getAttribute("type") === "text" &&
    eyeIcon.classList.contains("fa-eye")
  ) {
    passwordInput.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

emailIcon.addEventListener("click", () => {
  if (emailIcon.classList.contains("fa-envelope")) {
    emailIcon.classList.remove("fa-envelope");
    emailIcon.classList.add("fa-envelope-open");
  } else {
    emailIcon.classList.remove("fa-envelope-open");
    emailIcon.classList.add("fa-envelope");
  }
});
//! for Login Page;