// mostrar saludo al cargar la página
window.onload = function () {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
        document.getElementById('greeting').innerHTML = `¡Bienvenido,&nbsp;<span>${firstName} ${lastName}</span>&nbsp;!`;
    } else {
        document.getElementById('greeting').textContent = '¡Saludos!';
    }
};

// Verificación de autenticación de usuario
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '../pages/login.html';
    }
});
