const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.classList.remove('opacity-0', 'scale-y-0');
        mobileMenu.classList.add('opacity-100', 'scale-y-100');
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        mobileMenu.classList.add('opacity-0', 'scale-y-0');
        mobileMenu.classList.remove('opacity-100', 'scale-y-100');
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    }
});