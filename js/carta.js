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
