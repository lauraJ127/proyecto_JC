document.addEventListener('DOMContentLoaded', function () {
    // Definición de subservicios para cada servicio
    const subServices = {
        AAP: [
            "Reseñas", "Resúmenes", "Ensayos", "Artículos académicos",
            "Corrección y edición de trabajos (normas APA y otros estilos académicos)"
        ],
        EPA: [
            "Evaluación simulacro de exámen virtual", "Presentación de examen virtual",
            "Preparación para exámenes mediante ejercicios personalizados"
        ],
        DPI: [
            "Asesoría en la formulación y ejecución de proyectos de investigación", "Desarrollo y estructuración por fases", "Realización de gráficos con interpretación y análisis de datos", "Asesoría integral en la elaboración y defensa de tesis académicas."
        ]
    };

    // Elementos de los selectores
    const serviceSelect = document.getElementById('service');
    const subServiceSelect = document.getElementById('subService');

    // Evento para actualizar subservicios cuando cambia el servicio
    serviceSelect.addEventListener('change', function () {
        const selectedService = serviceSelect.value;

        // Reiniciar las opciones del selector de subservicios
        subServiceSelect.innerHTML = '<option value="">Selecciona el tipo de servicio que requieres</option>';

        // Habilitar o deshabilitar el selector de subservicios
        if (selectedService) {
            subServiceSelect.disabled = false;

            // Obtener los subservicios correspondientes al servicio seleccionado
            const subServicesOptions = subServices[selectedService];

            // Crear opciones para el selector de subservicios
            subServicesOptions.forEach(function (subService) {
                const option = document.createElement('option');
                option.value = subService.toLowerCase().replace(/ /g, "_");
                option.textContent = subService;
                subServiceSelect.appendChild(option);
            });
        } else {
            subServiceSelect.disabled = true;
        }
    });
});
