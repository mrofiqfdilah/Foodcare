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
        0: { slidesPerView: 1, spaceBetween: 6 },
        768: { slidesPerView: 3, spaceBetween: 8 },
    },
});