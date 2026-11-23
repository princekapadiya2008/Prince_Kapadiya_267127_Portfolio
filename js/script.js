const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", darkMode ? "Switch to light mode" : "Switch to dark mode");
});

menuToggle.addEventListener("click", function () {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", opened);
  menuToggle.textContent = opened ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(function (item) {
  item.addEventListener("click", function () {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Please fill in all fields before continuing.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
  feedback.textContent = "Opening your email application. This website does not save or send the message itself.";
  const portfolioEmail = "YOUR_EMAIL@example.com"; // Replace this with your real email address.
  if (portfolioEmail === "YOUR_EMAIL@example.com") {
    feedback.textContent = "The contact form is not set up yet. Add your email address in js/script.js first.";
    return;
  }
  window.location.href = "mailto:" + portfolioEmail + "?subject=" + subject + "&body=" + body;
});

document.getElementById("year").textContent = new Date().getFullYear();
