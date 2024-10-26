function logout(event) {
    if (event) event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Elimina solo el indicador de sesión activa, sin borrar las credenciales de usuario
    localStorage.removeItem('isLoggedIn');

    // Redirige al usuario a la página de inicio de sesión o a la página principal
    window.location.href = '../index.html';
}

// Agrega el evento al elemento de cierre de sesión (puede ser un ícono <i> o un enlace <a>)
document.addEventListener('DOMContentLoaded', function () {
    const logoutElement = document.querySelector('.logout-icon'); // Cambia la clase según el elemento que uses
    if (logoutElement) {
        logoutElement.addEventListener('click', logout);
    }
});
