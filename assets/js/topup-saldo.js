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


const paymentBtns = document.querySelectorAll('.payment-btn');

paymentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const isActive = this.classList.contains('border-orange-500');

        // Hapus border oranye dari semua tombol
        paymentBtns.forEach(b => {
            b.classList.remove('border-orange-500');
            b.classList.add('border-gray-300'); // sesuaikan border default
        });

        if (!isActive) {
            // Jika sebelumnya tidak aktif, aktifkan tombol yang diklik
            this.classList.add('border-orange-500');
            this.classList.remove('border-gray-300');
        } else {
            // Jika diklik lagi (toggle off), border kembali default
            this.classList.remove('border-orange-500');
            this.classList.add('border-gray-300');
        }
    });
});