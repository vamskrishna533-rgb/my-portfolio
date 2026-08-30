const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function () {
        const button = form.querySelector('button[type="submit"]');

        if (button) {
            button.disabled = true;
            button.textContent = 'Sending...';
        }
    });
}