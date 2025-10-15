/**
 * Theme Service
 * Handles theme switching and persistence
 */

export class ThemeService {
    constructor() {
        this.STORAGE_KEY = 'theme';
        this.root = document.documentElement;
        this.listeners = [];
    }

    /**
     * Initialize theme from saved preference or system preference
     */
    init() {
        const saved = this.getSaved();
        const theme = saved || this.getSystemPreference();
        this.setTheme(theme, false); // Don't save on init
        
        // Listen for system theme changes
        this.watchSystemPreference();
    }

    /**
     * Get saved theme from localStorage
     * @returns {string|null} Saved theme or null
     */
    getSaved() {
        try {
            return localStorage.getItem(this.STORAGE_KEY);
        } catch (e) {
            console.warn('localStorage not available:', e);
            return null;
        }
    }

    /**
     * Get system color scheme preference
     * @returns {string} 'dark' or 'light'
     */
    getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark' 
            : 'light';
    }

    /**
     * Get current theme
     * @returns {string} Current theme
     */
    getCurrentTheme() {
        return this.root.getAttribute('data-theme') || 'light';
    }

    /**
     * Set theme
     * @param {string} theme - Theme to set ('light' or 'dark')
     * @param {boolean} save - Whether to save to localStorage
     */
    setTheme(theme, save = true) {
        const validTheme = theme === 'dark' ? 'dark' : 'light';
        this.root.setAttribute('data-theme', validTheme);
        
        if (save) {
            try {
                localStorage.setItem(this.STORAGE_KEY, validTheme);
            } catch (e) {
                console.warn('Could not save theme:', e);
            }
        }

        // Notify listeners
        this.listeners.forEach(callback => callback(validTheme));
    }

    /**
     * Toggle between light and dark theme
     */
    toggle() {
        const current = this.getCurrentTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
    }

    /**
     * Watch for system preference changes
     */
    watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only respond to system changes if user hasn't set a preference
        mediaQuery.addEventListener('change', (e) => {
            if (!this.getSaved()) {
                this.setTheme(e.matches ? 'dark' : 'light', false);
            }
        });
    }

    /**
     * Add theme change listener
     * @param {Function} callback - Callback to call when theme changes
     */
    onChange(callback) {
        this.listeners.push(callback);
    }

    /**
     * Remove theme change listener
     * @param {Function} callback - Callback to remove
     */
    offChange(callback) {
        this.listeners = this.listeners.filter(cb => cb !== callback);
    }
}

// Create singleton instance
export const themeService = new ThemeService();

