const jenisDonasi = document.getElementById('jenisDonasi');
const nominalContainer = document.getElementById('nominalContainer');
const nominalInput = document.getElementById('nominalDonasi');

jenisDonasi.addEventListener('change', function () {
    if (this.value === 'uang') {
        nominalContainer.classList.remove('hidden');
    } else {
        nominalContainer.classList.add('hidden');
        nominalInput.value = '';
    }
});

nominalInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    e.target.value = value;
});