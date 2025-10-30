const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 6 },        // HP
        768: { slidesPerView: 3, spaceBetween: 8 },      // Tablet (default)
        810: { slidesPerView: 2, spaceBetween: 8 },      // iPad khusus
        1000: { slidesPerView: 3, spaceBetween: 8 },     // Laptop ke atas
    },
});