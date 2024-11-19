document.getElementById('enviarcorreo').addEventListener('click', function (event) {
    event.preventDefault();
    //Recolección de datos
    const subject = document.getElementById('subService').value;
    const projectDescription = document.querySelector("textarea[name='message']").value.trim();
    const nombre = document.querySelector("input[placeholder='nombre(s)']").value;
    const apellido = document.querySelector("input[placeholder='apellidos']").value;
    const celular = document.querySelector("input[placeholder='celular']").value;
    const email = document.querySelector("input[placeholder='correo electrónico']").value;

    // verificación de campos llenos
    if (!subject || !projectDescription || !nombre || !apellido || !celular || !email) {
        alert("Por favor, completa todos los campos requeridos antes de enviar.");
        return;
    }
    // Armar el contenido del correo
    const body = `Nombre: ${nombre}\nApellido: ${apellido}\nCelular: ${celular}\nEmail: ${email}\n\nDescripción del proyecto:\n${projectDescription}`;

    //Llenar el asunto y el contenido
    const mailtoLink = `mailto:salvavida.academico@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
})