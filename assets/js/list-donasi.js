window.addEventListener('load', () => {
    const progresses = [
        { id: 'progress-makanan', target: 200, max: 430 },
        { id: 'progress-uangporsi', target: 100, max: 430 },
    ];

    progresses.forEach(item => {
        const el = document.getElementById(item.id);
        if (!el) return; // jika element tidak ada, skip
        const percent = (item.target / item.max) * 100;

        el.style.transition = 'width 1.5s ease-out';
        setTimeout(() => {
            el.style.width = percent + '%';
        }, 100);
    });
});
