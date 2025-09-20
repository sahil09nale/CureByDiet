
        document.addEventListener('DOMContentLoaded', function() {
            // Animate food items on hover
            const foodItems = document.querySelectorAll('.food-item');
            foodItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Add animation delays to plan sections
            const sections = document.querySelectorAll('.plan-section');
            sections.forEach((section, index) => {
                section.style.animationDelay = `${index * 0.2 + 0.2}s`;
            });

            // Pulse animation for consultation button
            const consultationBtn = document.querySelector('.btn');
            setInterval(() => {
                consultationBtn.style.transform = 'translateY(-3px)';
                setTimeout(() => {
                    consultationBtn.style.transform = 'translateY(0)';
                }, 300);
            }, 2000);
        });

        // Print functionality
        function printDietPlan() {
            window.print();
        }
    