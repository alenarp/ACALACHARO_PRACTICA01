$(function () {

    $('.nivel-boton').on('click', function () {
        const boton = $(this);
        const detalle = boton.closest('.nivel').find('.nivel-detalle');
        const estabaAbierto = boton.attr('aria-expanded') === 'true';

        // cerrar los demás niveles
        $('.nivel-detalle').not(detalle).slideUp(400);
        $('.nivel-boton').not(boton).attr('aria-expanded', 'false');

        // Abrimos o cerramos el nivel pulsado
        detalle.slideToggle(400);
        boton.attr('aria-expanded', !estabaAbierto);
    });

});
