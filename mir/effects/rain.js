document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('rain');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];

    function createSnowflakes() {
        const snowflakeCount = 100;
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 5 + 1, // Random speed
                radius: Math.random() * 4 + 1, // Random size for variation
                char: '?',
                opacity: Math.random() * 0.5 + 0.5 // Random opacity for trail effect
            });
        }
    }

    function updateSnowflakes() {
        snowflakes.forEach(flake => {
            flake.y += flake.speed;

            if (flake.y > canvas.height) {
                flake.y = -flake.radius;
                flake.x = Math.random() * canvas.width;
            }
        });
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        ctx.font = '20px Arial';
        snowflakes.forEach(flake => {
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`; // Fill with varying opacity and white color
            ctx.strokeStyle = `rgba(255, 255, 255, ${flake.opacity})`; // Outline with varying opacity and white color
            ctx.lineWidth = 1; // Outline thickness

            ctx.strokeText(flake.char, flake.x, flake.y); // Draw the outline
            ctx.fillText(flake.char, flake.x, flake.y); // Fill the text
        });
    }

    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    // Initially hide the canvas content
    canvas.style.display = 'none';

    // Show the canvas content on click
    document.body.addEventListener('click', () => {
        if (canvas.style.display === 'none') {
            canvas.style.display = 'block';
            createSnowflakes();
            animate();
        }
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
