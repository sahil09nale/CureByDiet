
    document.addEventListener("DOMContentLoaded", function () {
      const signupBtn = document.getElementById("signupBtn");
      const errorMessage = document.getElementById("signUpErrorMessage");

      signupBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        if (!name || !email || !password || !confirmPassword) {
          errorMessage.textContent = "Please fill out all fields.";
          errorMessage.style.display = "block";
          return;
        }

        if (password !== confirmPassword) {
          errorMessage.textContent = "Passwords do not match.";
          errorMessage.style.display = "block";
          return;
        }

        // Store user credentials in localStorage
        const user = { name: name, email: email, password: password };
        localStorage.setItem("registeredUser", JSON.stringify(user));
        localStorage.setItem("currentUser", name);

        // Simulated success
        document.getElementById("signupSuccessModal").style.display = "flex";
        setTimeout(() => {
          document.getElementById("signupSuccessModal").style.display = "none";
          window.location.href = "login.html";
        }, 1500);
      });
    });
  