document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mostrar el menú al hacer clic en el ícono hamburguesa
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.style.display = 'none'; 
    });

    // Cerrar el menú al dar clic en el ícono de cerrar
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.style.display = 'block'; 
    });

    // Cerrar el menú al interactuar con cualquier enlace del menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            navToggle.style.display = 'block'; 
        });
    });
});
