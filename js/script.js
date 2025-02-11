document.getElementById('btn').addEventListener('click', function() {
    // Oculta o botão
    this.classList.add('hidden');
    // Exibe o coração
    document.getElementById('heart').classList.remove('hidden');
    document.getElementById('heart').classList.add('visible');
});

document.getElementById('heart').addEventListener('click', function() {
    // Oculta o coração
    this.classList.remove('visible');
    this.classList.add('hidden');
    // Exibe o botão novamente
    document.getElementById('btn').classList.remove('hidden');
});