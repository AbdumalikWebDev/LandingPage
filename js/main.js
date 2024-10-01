window.addEventListener("load", function () {
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    loader.style.display = "none";
    loaderBox.style.display = "none";
    document.body.style.overflow = "visible";

    document.body.classList.remove("loading");
  }, 2000);
});
document.addEventListener("click", (e) => {
  if (!signInContent.contains(e.target) && e.target !== signInNav) {
    signInContent.classList.remove("show-form");
    signInContent.classList.add("hide-form");
    body.style.overflow = "visible";
  }
  if (!signUpContent.contains(e.target) && e.target !== signUpNav) {
    signUpContent.classList.remove("show-form");
    signUpContent.classList.add("hide-form");
    body.style.overflow = "visible";
  }
});
