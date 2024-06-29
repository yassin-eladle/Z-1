document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('checkbox_DarkMode');

    // Check if dark mode is already enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    // Add event listener to the toggle button
    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Store dark mode preference
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Store dark mode preference
        }
    });
});
