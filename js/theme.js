// Theme management
const THEME_KEY = 'portfolio-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME);
    
    setTheme(savedTheme);
    return savedTheme;
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
    return newTheme;
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
}