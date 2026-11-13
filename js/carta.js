$(function () {

    $('.filtro').on('click', function () {
        const filtro = $(this).data('filtro');

        $('.filtro').attr('aria-pressed', 'false');
        $(this).attr('aria-pressed', 'true');

        if (filtro === 'todo') {
            $('.plato').fadeIn(300);
        } else {
            $('.plato').hide();
            $('.plato[data-categoria="' + filtro + '"]').fadeIn(300);
        }
    });

});


$(function () {

    const ficha = document.querySelector('#ficha');
    const categorias = { platos: 'Platos', cafes: 'Cafés', batidos: 'Batidos' };

    $('.plato').on('click', function () {
        const tarjeta = $(this);
        const imagen = tarjeta.find('img');

        $('#ficha-imagen').attr('src', imagen.attr('src')).attr('alt', imagen.attr('alt'));
        $('#ficha-categoria').text(categorias[tarjeta.data('categoria')]);
        $('#ficha-nombre').text(tarjeta.find('h2').first().text());
        $('#ficha-precio').text(tarjeta.find('.precio').text());
        $('#ficha-detalle').html(tarjeta.find('.detalle').html());

        ficha.showModal();
    });

    $('#cerrar-ficha').on('click', function () {
        ficha.close();
    });

    $(ficha).on('click', function (evento) {
        if (evento.target === ficha) {
            ficha.close();
        }
    });

});