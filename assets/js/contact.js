
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
      } else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
      }
    });
  