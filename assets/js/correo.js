document.getElementById('enviarcorreo').addEventListener('click', function (event) {
    event.preventDefault();

    const subject = document.getElementById('subService').value;
    const projectDescription = document.querySelector("textarea[name='message']").value.trim();
    const nombre = document.querySelector("input[placeholder='nombre(s)']").value;
    const apellido = document.querySelector("input[placeholder='apellidos']").value;
    const celular = document.querySelector("input[placeholder='celular']").value;
    const email = document.querySelector("input[placeholder='correo electrónico']").value;

    if (!subject || !projectDescription || !nombre || !apellido || !celular || !email) {
        alert("Por favor, completa todos los campos requeridos antes de enviar.");
        return;
    }

    const body = `Nombre: ${nombre}\nApellido: ${apellido}\nCelular: ${celular}\nEmail: ${email}\n\nDescripción del proyecto:\n${projectDescription}`;

    const mailtoLink = `mailto:salvavida.academico@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
})