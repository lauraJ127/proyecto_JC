function logout(event) {
    if (event) event.preventDefault(); 
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../../index.html';
}

// Agrega el evento al elemento de cierre de sesión
document.addEventListener('DOMContentLoaded', function () {
    const logoutElement = document.querySelector('.logout-icon'); 
    if (logoutElement) {
        logoutElement.addEventListener('click', logout);
    }
});
