/**
 * App Card Component
 * Renders a single app card for the App Store apps grid
 */

export class AppCard {
    constructor(data) {
        this.data = data;
    }

    /**
     * Create and return app card element
     * @returns {HTMLElement} App card element
     */
    render() {
        const link = document.createElement('a');
        link.href = this.data.trackViewUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'app-card';
        
        const rating = this.data.averageUserRating || 0;
        const price = this.data.price === 0 ? 'GET' : `$${this.data.price.toFixed(2)}`;
        
        link.innerHTML = `
            <div class="app-icon">
                <img src="${this.escapeHtml(this.data.artworkUrl100)}" 
                     alt="${this.escapeHtml(this.data.trackName)}" 
                     loading="lazy"
                     onerror="this.src='logos/default.svg'">
            </div>
            <div class="app-body">
                <p class="app-category">${this.escapeHtml(this.data.primaryGenreName)}</p>
                <h3>${this.escapeHtml(this.data.trackName)}</h3>
                <div class="app-stats">
                    ${rating > 0 ? `<span class="app-badge app-rating">⭐ ${rating.toFixed(1)}</span>` : ''}
                    <span class="app-badge app-price">${price}</span>
                </div>
            </div>
        `;
        
        return link;
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

/**
 * Render multiple app cards
 * @param {Array} apps - Array of app data
 * @param {HTMLElement} container - Container to render into
 * @param {Function} sortFn - Optional sort function
 */
export function renderApps(apps, container, sortFn = null) {
    if (!container) {
        console.warn('AppCard: Container element not found');
        return;
    }

    // Clear container
    container.innerHTML = '';

    // Sort if sort function provided
    const appsList = sortFn ? [...apps].sort(sortFn) : apps;

    // Render each app
    appsList.forEach(appData => {
        const appCard = new AppCard(appData);
        container.appendChild(appCard.render());
    });
}

/**
 * Common sort functions
 */
export const AppSortFunctions = {
    byRatingCount: (a, b) => (b.userRatingCount || 0) - (a.userRatingCount || 0),
    byRating: (a, b) => (b.averageUserRating || 0) - (a.averageUserRating || 0),
    byName: (a, b) => a.trackName.localeCompare(b.trackName)
};

