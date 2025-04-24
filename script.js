document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.querySelector('.header-logo a');
    headerLogo.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        headerLogo.style.color = 'green';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const visualContainer = document.querySelector('.visual-container');
    const h1 = visualContainer.querySelector('h1');
    visualContainer.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        h1.style.color = 'green';
    });
});