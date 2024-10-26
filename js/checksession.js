document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '../pages/login.html'; // Cambia la URL según sea necesario
    }
});
