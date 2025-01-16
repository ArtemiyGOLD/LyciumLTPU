function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const welcomeMessage = document.querySelector('.welcome-message');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('show');
        welcomeMessage.style.display = 'none';
    } else {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('show');
        welcomeMessage.style.display = 'block';
    }
}
