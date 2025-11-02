window.addEventListener('load', () => {
    const progresses = [
        { id: 'progressdetail', target: 120, max: 500 },
    ];

    progresses.forEach(item => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const percent = (item.target / item.max) * 100;
        el.style.width = '0%';
        el.style.transition = 'width 1.5s ease-out';

        setTimeout(() => {
            el.style.width = percent + '%';
        }, 200);
    });
});

const modal = document.getElementById('donasiModal');
const openButtons = document.querySelectorAll('.btn-donasi');

// Buka modal
openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
});

// Format angka menjadi ribuan (1.000, 10.000, dst)
const inputNominal = document.getElementById('nominal-donasi');

inputNominal.addEventListener('input', function (e) {

    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    e.target.value = value;
});

document.getElementById('formDonasi').addEventListener('submit', (e) => {
    e.preventDefault();


    value_donasi = document.getElementById("nominal-donasi").value

    document.getElementById('donasiModal').classList.add('hidden');

    Swal.fire({
        title: `Terima kasih orang baik, Sedekah Uangmu sebesar Rp ${value_donasi}  Berhasil!`,
        text: 'Tim FoodCare akan mengelola dan mengirimkan laporan untuk kamu, kemana makanan akan diberikan!',
        imageUrl: '../assets/image/Success-Icon.svg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Icon Donasi',
        confirmButtonText: 'Kembali Ke Beranda',
        background: '#fff',
        customClass: {
            title: 'swal-title-custom',
            htmlContainer: 'swal-text-custom',
            confirmButton: 'swal-confirm-btn',
        },
    }).then(() => {
        e.target.reset();

        window.location.href = '../../index.html';
    });
});

