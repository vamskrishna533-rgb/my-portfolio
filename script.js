const form = document.querySelector('form');

if (form) {
    let submitted = false;

    form.addEventListener('submit', function (event) {
        if (submitted) {
            event.preventDefault();
            return;
        }

        submitted = true;

        const button = form.querySelector('button[type="submit"]');

        if (button) {
            button.disabled = true;
            button.textContent = 'Sending...';
        }
    });
}