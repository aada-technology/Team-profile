

        
        function createSparkles() {
            const sparklesContainer = document.getElementById('sparkles');
            const sparkleCount = 8;

            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');

                const size = Math.random() * 4 + 2;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;

                sparkle.style.left = `${Math.random() * 100}%`;
                sparkle.style.top = `${Math.random() * 100}%`;

                const delay = Math.random() * 3;
                sparkle.style.animationDelay = `${delay}s`;

                sparklesContainer.appendChild(sparkle);
            }
        }

        // Initialize
        window.onload = createSparkles;

        // Optional: Add click effect on button
        document.querySelector('.btn-2026').addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    