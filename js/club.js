document.querySelectorAll('.nivel-boton').forEach(function (boton) {
    boton.addEventListener('click', function () {
        const contenido = document.getElementById(boton.getAttribute('aria-controls'));
        const abierto = boton.getAttribute('aria-expanded') === 'true';

        boton.setAttribute('aria-expanded', !abierto);
        contenido.classList.toggle('hidden', abierto);
    });
});
