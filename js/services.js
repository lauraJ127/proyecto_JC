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
            "Asesoría en la formulación y ejecución de proyectos de investigación", "Desarrollo y estructuración por fases", "Realización de gráficos con interpretación y análisis de datos", "Asesoría integral en la elaboración y defensa de tesis académicas"
        ]
    };

    // Definición de precios para cada combinación de servicio y subservicio
    const prices = {
        AAP: {
            "reseñas": "75.000 pesos colombianos",
            "resúmenes": "35.000 pesos colombianos",
            "ensayos": "50.000 pesos colombianos",
            "artículos_académicos": "85.000 pesos colombianos",
            "corrección_y_edición_de_trabajos_(normas_apa_y_otros_estilos_académicos)": "35.000 pesos colombianos"
        },
        EPA: {
            "evaluación_simulacro_de_exámen_virtual": "40.000 pesos colombianos",
            "presentación_de_examen_virtual": "50.000 pesos colombianos",
            "preparación_para_exámenes_mediante_ejercicios_personalizados": "80.000 pesos colombianos"
        },
        DPI: {
            "asesoría_en_la_formulación_y_ejecución_de_proyectos_de_investigación": "90.000 pesos colombianos",
            "desarrollo_y_estructuración_por_fases": "80.000 pesos colombianos (por fase)",
            "realización_de_gráficos_con_interpretación_y_análisis_de_datos": "70.000 pesos colombianos",
            "asesoría_integral_en_la_elaboración_y_defensa_de_tesis_académicas": "350.000 pesos colombianos"
        }
    };

    // Elementos de los selectores y el mensaje de precio
    const serviceSelect = document.getElementById('service');
    const subServiceSelect = document.getElementById('subService');
    const priceMessage = document.getElementById('priceMessage');

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

        // Ocultar el mensaje de precio cuando se cambia el servicio
        priceMessage.style.display = 'none';
    });

    // Evento para mostrar mensaje de precio cuando se selecciona un subservicio
    subServiceSelect.addEventListener('change', function () {
        const selectedService = serviceSelect.value;
        const selectedSubService = subServiceSelect.value;

        // Mostrar el precio específico o el mensaje predeterminado
        if (selectedService && selectedSubService) {
            const servicePrices = prices[selectedService];
            const price = servicePrices[selectedSubService];

            // Verifica si hay un precio específico y muestra el mensaje correspondiente
            if (price !== undefined) {
                priceMessage.textContent = `Precio estimado a partir de: $${price}. Los valores pueden ajustarse según la extensión y complejidad del servicio solicitado.`;
            } else {
                priceMessage.textContent = "Precio de referencia. Los valores indicados pueden variar de acuerdo a la longitud y complejidad del servicio.";
            }
            priceMessage.style.display = 'block';
        } else {
            priceMessage.style.display = 'none';
        }
    });
});
