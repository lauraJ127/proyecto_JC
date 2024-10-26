// Función para mostrar el saludo al cargar la página
window.onload = function () {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
        document.getElementById('greeting').innerHTML = `¡Bienvenido,&nbsp;<span>${firstName} ${lastName}</span>&nbsp;!`;
    } else {
        document.getElementById('greeting').textContent = '¡Saludos!';
    }
};

// Función para registrar al usuario
document.addEventListener('DOMContentLoaded', function () {
    // Función para registrar al usuario
    document.querySelector('#registerForm .btn[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim(); // trim() para eliminar espacios
        const lastName = document.getElementById('lastName').value.trim();
        const registerEmail = document.getElementById('registerEmail').value.trim();
        const registerPassword = document.getElementById('registerPassword').value.trim();

        if (firstName && lastName && registerEmail && registerPassword) {
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', registerEmail);
            localStorage.setItem('password', registerPassword);

            alert('¡Cuenta creada con éxito!');

            setTimeout(() => {
                document.getElementById('reg-log').checked = false;
                document.getElementById('registerForm').style.display = 'none';
                document.getElementById('loginForm').style.display = 'block';
            }, 2000);
        }
    });

    // Función para iniciar sesión
    document.querySelector('#loginForm .btn[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            localStorage.setItem('isLoggedIn', 'true');

            document.getElementById('loginMessage').innerHTML = 'Inicio de sesión exitoso.<br>Redirigiendo a la página de inicio...';
            document.getElementById('loginMessage').style.color = 'green';

            setTimeout(() => {
                window.location.href = '../pages/service.html';
            }, 2000);

        } else {
            document.getElementById('loginMessage').innerHTML = 'Correo o contraseña incorrectos.<br>Por favor, intenta nuevamente.';
            document.getElementById('loginMessage').style.color = 'red';
        }
    });
});
