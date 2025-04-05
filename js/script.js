// script.js
document.getElementById('btn').addEventListener('click', function () {
    const heart = document.getElementById('heart');
    heart.classList.remove('hidden');
    heart.scrollIntoView({ behavior: 'smooth' });
    this.style.display = 'none';
});
