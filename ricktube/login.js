function toggleForms() {
  const loginContainer = document.getElementById("loginContainer");
  const registerContainer = document.getElementById("registerContainer");

  if (loginContainer.style.display === "none") {
    loginContainer.style.display = "block";
    registerContainer.style.display = "none";
  } else {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
  }
}

function handleLogin(event) {
  event.preventDefault();

  window.location.href = "index.html";
}

function handleRegister(event) {
  event.preventDefault();
  alert("Registered!");
}
