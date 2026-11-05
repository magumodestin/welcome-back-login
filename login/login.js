const passwordInput = document.getElementById("password");
const eyeBtn = document.getElementById("eyeBtn");

eyeBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeBtn.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    eyeBtn.textContent = "👁️";
  }
});

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

registerTab.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
});

loginTab.addEventListener("click", function () {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
});

const createAccountLink = document.getElementById("createAccountLink");
createAccountLink.addEventListener("click", function (e) {
  e.preventDefault();
  registerTab.click();
});

const loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginTab.click();
});

const forms = document.querySelectorAll("form");
forms.forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "upcoming.html";
  });
});
