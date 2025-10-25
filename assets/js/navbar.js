const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('opacity-0', 'scale-y-0', 'pointer-events-none');
    mobileMenu.classList.add('opacity-100', 'scale-y-100', 'pointer-events-auto');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('opacity-0', 'scale-y-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100', 'scale-y-100', 'pointer-events-auto');
});