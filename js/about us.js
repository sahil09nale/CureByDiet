
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.about-us > div');

    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.9;

      revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          el.classList.add('reveal');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  