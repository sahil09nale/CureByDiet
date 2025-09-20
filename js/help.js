
        document.addEventListener('DOMContentLoaded', function() {
            // FAQ toggle functionality
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });

            // Search functionality
            const searchInput = document.querySelector('.search-box input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                faqItems.forEach(item => {
                    const question = item.querySelector('.faq-question').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                    
                    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                        
                        // Highlight matching text
                        if (searchTerm.length > 2) {
                            const regex = new RegExp(searchTerm, 'gi');
                            const questionText = item.querySelector('.faq-question').textContent;
                            const answerText = item.querySelector('.faq-answer').textContent;
                            
                            item.querySelector('.faq-question').innerHTML = questionText.replace(regex, 
                                match => `<span style="background-color: #fff9c4">${match}</span>`);
                            
                            item.querySelector('.faq-answer').innerHTML = answerText.replace(regex, 
                                match => `<span style="background-color: #fff9c4">${match}</span>`);
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });
            });

            // Animation for contact cards
            const contactCards = document.querySelectorAll('.contact-card');
            contactCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100 + 300);
            });

            // Button hover effect
            const btn = document.querySelector('.btn');
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-3px)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
    