const storageKey = 'theme-preference';

const theme = {
    value: getThemePreference()
};

window.onload = () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeToggleSmall = document.querySelector('#theme-toggle-small');
    reflectThemePreference();
    themeToggle.addEventListener('click', () => onClick());
    themeToggleSmall.addEventListener('click', () => onClick());
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches: isDark}) => {
        theme.value = isDark ? 'dark' : 'light';
        setThemePreference();
    });

function onClick() {
    if (document.body.classList.contains('dark')) {
        theme.value = 'light';

    } else {
        theme.value = 'dark';
    }
    setThemePreference();
}

function getThemePreference() {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

function setThemePreference() {
    localStorage.setItem(storageKey, theme.value);
    reflectThemePreference();
}

function reflectThemePreference() {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeToggleSmall = document.querySelector('#theme-toggle-small');

    if (theme.value === 'dark') {
        document.body.classList.replace('light', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f7f8f5');
    } else if (theme.value === 'light') {
        document.body.classList.replace('dark', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f7f8f5');
    }

    if (document.getElementById('map')) {
        setMapTheme(theme.value);
    }

    if (theme.value === 'dark') {
        // Change the SVG content and text for dark mode
        themeToggle.innerHTML = `
        <svg class="moon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3764 9.04656C11.2112 9.06022 11.0441 9.06718 10.8754 9.06718C7.56173 9.06718 4.87549 6.38093 4.87549 3.06728C4.87549 1.94653 5.18278 0.897541 5.71771 -1.22983e-05C2.52866 0.186293 0 2.83147 0 6.06725C0 9.42391 2.7211 12.145 6.07776 12.145C8.35189 12.145 10.3343 10.896 11.3764 9.04656Z" fill="currentColor"></path>
        </svg>
        <span>Low Light</span>
      `;

        themeToggleSmall.innerHTML = `
        <svg class="moon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3764 9.04656C11.2112 9.06022 11.0441 9.06718 10.8754 9.06718C7.56173 9.06718 4.87549 6.38093 4.87549 3.06728C4.87549 1.94653 5.18278 0.897541 5.71771 -1.22983e-05C2.52866 0.186293 0 2.83147 0 6.06725C0 9.42391 2.7211 12.145 6.07776 12.145C8.35189 12.145 10.3343 10.896 11.3764 9.04656Z" fill="currentColor"></path>
        </svg>
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
        <span>Bright Light</span>
      `;

        themeToggleSmall.innerHTML = `
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
      `;
    }
}

reflectThemePreference();
