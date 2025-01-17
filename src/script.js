function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const welcomeMessage = document.querySelector('.welcome-message');

    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        setTimeout(() => {
            sidebar.style.opacity = '0'; // Устанавливаем прозрачность для плавного исчезновения
        }, 10); // Небольшая задержка для запуска анимации
        setTimeout(() => {
            sidebar.classList.add('hidden'); // Скрываем после завершения анимации
        }, 500); // Убираем после завершения анимации
        welcomeMessage.style.display = 'block';
    } else {
        sidebar.classList.remove('hidden');
        setTimeout(() => {
            sidebar.style.opacity = '1'; // Устанавливаем видимость для плавного появления
            sidebar.classList.add('show');
        }, 10); // Небольшая задержка для запуска анимации
        welcomeMessage.style.display = 'none';
    }
}
