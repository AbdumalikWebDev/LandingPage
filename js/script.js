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
const signInButton = document.querySelector(".sign-in-btn"),
  signUpButton = document.querySelector(".sign-up-btn"),
  signInContent = document.querySelector(".sign-in-box"),
  signUpContent = document.querySelector(".sign-up-box"),
  verifyInput = document.querySelector(".verify-input"),
  signInNav = document.querySelector("#sign-in-nav-btn"),
  signUpNav = document.querySelector("#sign-up-nav-btn");
const togglePassword = document.querySelector("#togglePassword");
const passwordInput = document.querySelector("#sign-in-password-input");
const formCloseBtns = document.querySelectorAll(".form-close-btn");
const sidebarSignInBtn = document.querySelector("#sign-in-side-nav");
const sidebarSignUpBtn = document.querySelector("#sign-up-side-nav");
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
signInNav.addEventListener("click", () => {
  if (!signUpContent.classList.contains("show-form")) {
    signInContent.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
      signInContent.classList.add("show-form");
      signInContent.classList.remove("hide-form");
    }, 10);
  }
});
formCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    signInContent.classList.add("hide-form");
    signUpContent.classList.add("hide-form");
    signInContent.classList.remove("show-form");
    signUpContent.classList.remove("show-form");
    body.style.overflow = "visible";

    setTimeout(() => {
      signInContent.style.display = "none";
      signUpContent.style.display = "none";
    }, 310);
  });
});
signUpNav.addEventListener("click", () => {
  if (!signInContent.classList.contains("show-form")) {
    signUpContent.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
      signUpContent.classList.add("show-form");
      signUpContent.classList.remove("hide-form");
    }, 5);
  }
});
sidebarSignInBtn.addEventListener("click", () => {
  sidebar.style.left = "100%";
  signInContent.style.display = "flex";
  body.style.overflow = "hidden";
  setTimeout(() => {
    signInContent.classList.add("show-form");
    signInContent.classList.remove("hide-form");
  }, 500);
});
sidebarSignUpBtn.addEventListener("click", () => {
  sidebar.style.left = "100%";
  signUpContent.style.display = "flex";
  body.style.overflow = "hidden";
  setTimeout(() => {
    signUpContent.classList.add("show-form");
    signUpContent.classList.remove("hide-form");
  }, 505);
});
togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
