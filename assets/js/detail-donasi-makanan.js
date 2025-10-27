window.addEventListener('load', () => {
    const progresses = [
        { id: 'progressdetail', target: 200, max: 430 },
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
