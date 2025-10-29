const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const imageInput = document.getElementById("imageInput");
const profileImage = document.getElementById("profileImage");

// Show / Hide Password
togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle("ri-eye-off-line");
});

// Preview Foto Baru
imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});