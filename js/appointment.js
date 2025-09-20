
    document.getElementById("appointmentForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      successMessage.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        document.getElementById("appointmentForm").reset();
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      }, 1000);
    });
  