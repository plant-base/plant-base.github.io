document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;


    // Function to set the theme based on stored preference
    function setTheme(theme,) {
        body.classList.add(theme);

        if (document.getElementById('map')) {
            setMapTheme(theme);
        }


        if (theme === 'dark') {
            // Change the SVG content and text for dark mode
            themeToggle.innerHTML = `
        <svg class="moon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3764 9.04656C11.2112 9.06022 11.0441 9.06718 10.8754 9.06718C7.56173 9.06718 4.87549 6.38093 4.87549 3.06728C4.87549 1.94653 5.18278 0.897541 5.71771 -1.22983e-05C2.52866 0.186293 0 2.83147 0 6.06725C0 9.42391 2.7211 12.145 6.07776 12.145C8.35189 12.145 10.3343 10.896 11.3764 9.04656Z" fill="currentColor"></path>
        </svg>
        <span>Low Light</span>
      `;
        } else {
            // Change the SVG content and text for light mode
            themeToggle.innerHTML = `
        <svg class="sun" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.79932" cy="8" r="4" fill="currentColor"></circle><circle class="ray" cx="8.79932" cy="1" r="1" fill="currentColor">
            </circle><circle class="ray" cx="8.79932" cy="15" r="1" fill="currentColor">
            </circle><circle class="ray" cx="1.79932" cy="8" r="1" transform="rotate(-90 1.79932 8)" fill="currentColor">
            </circle><circle class="ray" cx="15.7993" cy="8" r="1" transform="rotate(-90 15.7993 8)" fill="currentColor">
            </circle><circle class="ray" cx="3.84927" cy="3.05078" r="1" transform="rotate(-45 3.84927 3.05078)" fill="currentColor">
            </circle><circle class="ray" cx="13.7487" cy="12.9503" r="1" transform="rotate(-45 13.7487 12.9503)" fill="currentColor">
            </circle><circle class="ray" cx="3.84961" cy="12.9491" r="1" transform="rotate(-135 3.84961 12.9491)" fill="currentColor">
            </circle><circle class="ray" cx="13.749" cy="3.04957" r="1" transform="rotate(-135 13.749 3.04957)" fill="currentColor">
            </circle>
        </svg>
        <span>Bright Indirect Light</span>
      `;
        }
    }

    // Check if the theme preference is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no theme preference is found, set the default theme
        setTheme('light');
    }

    themeToggle.addEventListener('click', function() {
        // Toggle the theme between light and dark
        if (body.classList.contains('dark')) {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light');

        } else {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');

        }
    });
});
