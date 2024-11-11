document.addEventListener('DOMContentLoaded', function () {

    function displayGreeting() {
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');

        if (firstName && lastName) {
            document.getElementById('login-icon').style.display = 'none';
            document.getElementById('greeting').innerHTML = `
                ¡Bienvenido,&nbsp;<span>${firstName} ${lastName}</span>&nbsp;! 
                <a href="#" title="Cerrar Sesión"><i class="logout-icon ri-logout-box-r-line" data-title="LogOut" id="logout-icon"></i></a>
            `;
        } else {
            document.getElementById('greeting').innerHTML = ''; // Limpia el saludo si no hay sesión
            document.getElementById('login-icon').style.display = 'block';
        }
    }

    // Función para el cierre de sesión
    function logout(event) {
        if (event) event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        document.getElementById('greeting').innerHTML = ''; // Limpia el saludo
        document.getElementById('login-icon').style.display = 'block';
    }

    // Agrega el evento de `click` para el ícono de logout utilizando delegación de eventos
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'logout-icon') {
            logout(event);
        }
    });

    displayGreeting();
});
