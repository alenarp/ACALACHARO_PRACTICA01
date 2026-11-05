
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

// Cerrar menú al pulsar un enlace
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menu.classList.add('hidden');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.textContent = 'Menú';
    });
});

// Modo oscuro - modo claro
const botonTema = document.querySelector('#boton-tema');
const html = document.documentElement;

if (localStorage.getItem('tema') === 'oscuro') {
    html.classList.add('dark');
    botonTema.setAttribute('aria-pressed', 'true');
}

botonTema.addEventListener('click', function () {
    html.classList.toggle('dark');

    const oscuro = html.classList.contains('dark');
    botonTema.setAttribute('aria-pressed', oscuro);
    localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
});