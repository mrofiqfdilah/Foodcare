const input = document.getElementById('nominal');
const boxes = document.querySelectorAll('.box');

function formatRupiah(value) {
    return Number(value).toLocaleString('id-ID');
}

// Input otomatis format ribuan
input.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');
    this.value = value ? formatRupiah(value) : '';
    // Jika user mengetik manual, hilangkan highlight box
    boxes.forEach(b => {
        b.classList.remove('border-orange-500');
        b.classList.add('border-[#DEDEDE]');
    });
});

// Klik box untuk isi input & highlight border
boxes.forEach(box => {
    box.addEventListener('click', function () {
        const isActive = this.classList.contains('border-orange-500');

        // Hapus border oranye dari semua box
        boxes.forEach(b => {
            b.classList.remove('border-orange-500');
            b.classList.add('border-[#DEDEDE]');
        });

        if (!isActive) {
            // Jika sebelumnya tidak aktif, aktifkan box yang diklik
            this.classList.add('border-orange-500');
            this.classList.remove('border-[#DEDEDE]');

            // Masukkan nilai ke input
            const value = this.dataset.value;
            input.value = formatRupiah(value);
        } else {
            // Jika diklik lagi (toggle off), kosongkan input
            input.value = '';
        }
    });
});

// Ambil waktu saat ini di Indonesia (WIB)
const now = new Date();

// Tambah 5 jam
now.setHours(now.getHours() + 5);

// Format tanggal dan jam dengan locale Indonesia
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};

const batasWaktu = now.toLocaleString('id-ID', options);

// Tampilkan ke dalam elemen <p>
document.getElementById("batas-waktu").textContent = `Batas waktu pembayaran hingga ${batasWaktu} WIB`;


const copyBtn = document.getElementById("copyBtn");
const nominal = document.getElementById("nominal");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(nominal.value);
    copyBtn.textContent = "Disalin!";
    setTimeout(() => (copyBtn.textContent = "Salin"), 1500);
});