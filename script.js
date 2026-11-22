const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  if (!email || !password) {
    message.textContent = "Please complete all fields.";
    message.style.color = "red";
    return;
  }
  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
    return;
  }
  message.textContent = "Form validated! Authentication is not configured.";
  message.style.color = "green";
});
