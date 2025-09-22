
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animation for feature cards on scroll
        const featureCards = document.querySelectorAll('.feature-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });

        // CTA button click handler
        document.querySelector('.cta-button').addEventListener('click', () => {
            alert('Welcome to CureByDiet! Please login or sign up to continue.');
        });

        // Display username
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            document.getElementById('username').textContent = `Welcome, ${currentUser}`;
        }

        // Logout functionality
        document.querySelector('a[href="/"]').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            localStorage.removeItem('registeredUser');
            window.location.href = 'login.html';
        });
    