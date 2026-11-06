/* =========================================================
   librerias.js
   ========================================================= */
/* ---------- 1. SWIPER ---------- */

const sliderCarteles = new Swiper('.carteles', {
    loop: true,              
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 4000,         
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
    nextEl: '.cartel-siguiente',
    prevEl: '.cartel-anterior'
    },
    a11y: {
        prevSlideMessage: 'Cartel anterior',
        nextSlideMessage: 'Cartel siguiente',
        paginationBulletMessage: 'Ir al cartel {{index}}'
    }
});


/* ---------- 2. AOS ---------- */
AOS.init({
    duration: 700,   
    once: true,     
    offset: 80     3
});