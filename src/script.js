function toggleSidebar() {
    const greenSidebar = document.getElementById('greenSidebar');
    const blackSidebar = document.getElementById('blackSidebar');
    const welcomeMessage = document.querySelector('.welcome-message');

    if (greenSidebar.classList.contains('show')) {
        greenSidebar.classList.remove('show');
        blackSidebar.classList.remove('show');
        setTimeout(() => {
            greenSidebar.classList.add('hidden');
            blackSidebar.classList.add('hidden');
        }, 500); // Убираем после завершения анимации
        welcomeMessage.style.display = 'block';
    } else {
        greenSidebar.classList.remove('hidden');
        blackSidebar.classList.remove('hidden');
        setTimeout(() => {
            greenSidebar.classList.add('show');
            blackSidebar.classList.add('show');
        }, 10); // Появление после задержки
        welcomeMessage.style.display = 'none';
    }
}
