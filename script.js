document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = Array.from(popoverTriggerList).map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Función para ocultar el popover después de 2000 milisegundos (2 segundos)
    function hidePopoverAfterDelay(popoverInstance, delay) {
        setTimeout(function () {
            popoverInstance.hide();
        }, delay);
    }

    // Asigna el evento de mostrarse a cada popover
    popoverList.forEach(function (popoverInstance) {
        popoverInstance._element.addEventListener('shown.bs.popover', function () {
            // Oculta el popover después de 2000 milisegundos (2 segundos)
            hidePopoverAfterDelay(popoverInstance, 2000);
        });
    });

    const botonCopiar = document.getElementById('botonCopiar');
    const miTexto = document.querySelector('.contact-textbox input');

    botonCopiar.addEventListener('click', function () {
        // Selecciona el contenido del textbox
        miTexto.select();

        // Intenta copiar el contenido al portapapeles
        document.execCommand('copy');

        // Deselecciona el texto para que no aparezca resaltado
        miTexto.setSelectionRange(0, 0);
    });
});
