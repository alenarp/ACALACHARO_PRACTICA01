const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');
const enlacesMenu = document.querySelectorAll('#menu a');

// Menú abrir y cerrar
botonMenu.addEventListener('click', function () {
    menu.classList.toggle('hidden');

    const abierto = !menu.classList.contains('hidden');
    botonMenu.setAttribute('aria-expanded', abierto);
    botonMenu.textContent = abierto ? 'Cerrar' : 'Menú';
});

// cerrar menú al pulsar un enlace del menú
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menu.classList.add('hidden');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.textContent = 'Menú';
    });
});
