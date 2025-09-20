
    document.addEventListener("DOMContentLoaded", function() {
      const passwordField = document.getElementById("password");
      const togglePasswordIcon = document.querySelector(".toggle-password");
      const loginBtn = document.getElementById("loginBtn");
      const loginErrorMessage = document.getElementById("loginErrorMessage");

      togglePasswordIcon.addEventListener("click", function(event) {
        event.preventDefault();
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        togglePasswordIcon.classList.toggle("fa-eye");
        togglePasswordIcon.classList.toggle("fa-eye-slash");
      });

      loginBtn.addEventListener("click", function() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        loginErrorMessage.style.display = "none";

        if (!email || !password) {
          loginErrorMessage.textContent = "Please fill out all fields.";
          loginErrorMessage.style.display = "block";
          return;
        }

        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
          document.getElementById("loginSuccessModal").style.display = "flex";
          setTimeout(() => {
            window.location.href = "home.html";
          }, 1500);
        } else {
          loginErrorMessage.textContent = "Invalid email or password.";
          loginErrorMessage.style.display = "block";
        }
      });
    });
  