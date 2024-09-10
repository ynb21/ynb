document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

setInterval(function() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '˖';
    sparkle.style.left = `${mouseX}px`;
    sparkle.style.top = `${mouseY}px`;
    sparkle.style.fontSize = `${Math.random() * 12 + 12}px`;
    sparkle.style.opacity = 1;
    document.body.appendChild(sparkle);
    sparkle.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    sparkle.style.transform = `translate(-50%, -50%) scale(${Math.random() * 1.5 + 0.5})`;
    sparkle.style.animation = `sparkleAnimation ${Math.random() * 0.5 + 0.5}s ease-out`;
    setTimeout(() => {
        sparkle.remove();
    }, 500);
}, 65);
