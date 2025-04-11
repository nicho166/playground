document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.querySelector('.header-logo a');
    headerLogo.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        headerLogo.style.color = 'green';
    });
});