
        document.addEventListener('DOMContentLoaded', function() {
            // Animate elements when they come into view
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.article-card, .stat-item, .tip-card');
                
                elements.forEach((element, index) => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        setTimeout(() => {
                            element.classList.add('animated');
                        }, index * 100);
                    }
                });
            };
            
            // Initial check
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Button hover effect
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('mouseenter', () => {
                ctaButton.style.transform = 'translateY(-3px)';
            });
            ctaButton.addEventListener('mouseleave', () => {
                ctaButton.style.transform = 'translateY(0)';
            });
            
            // Article card hover effects
            const articleCards = document.querySelectorAll('.article-card');
            articleCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = 'var(--shadow)';
                });
            });
        });
    