const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePassword.classList.toggle('ri-eye-line', isPassword);
    togglePassword.classList.toggle('ri-eye-off-line', !isPassword);
});