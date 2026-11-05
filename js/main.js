
const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');
const enlacesMenu = document.querySelectorAll('#menu a');

// Menú abrir y cerrar
botonMenu.addEventListener('click', function () {
    const abierto = document.documentElement.classList.toggle('menu-abierto');

    botonMenu.setAttribute('aria-expanded', abierto);
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar menú al pulsar un enlace
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        document.documentElement.classList.remove('menu-abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.setAttribute('aria-label', 'Abrir menú');
    });
});

// Cerrar menú con Escape
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && document.documentElement.classList.contains('menu-abierto')) {
        document.documentElement.classList.remove('menu-abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.setAttribute('aria-label', 'Abrir menú');
        botonMenu.focus();
    }
});

// Cerrar menú al pasar a escritorio
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        document.documentElement.classList.remove('menu-abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.setAttribute('aria-label', 'Abrir menú');
    }
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
