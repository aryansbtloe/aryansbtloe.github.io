/**
 * Navigation Service
 * Handles tab navigation and URL hash management
 */

export class NavigationService {
    constructor() {
        this.tabs = [];
        this.tabContents = [];
        this.currentTab = null;
        this.listeners = [];
    }

    /**
     * Initialize navigation
     * @param {NodeList} tabs - Tab button elements
     * @param {NodeList} tabContents - Tab content elements
     */
    init(tabs, tabContents) {
        this.tabs = Array.from(tabs);
        this.tabContents = Array.from(tabContents);

        // Set up click handlers
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.tab);
            });
        });

        // Handle initial hash
        this.handleHash();

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleHash());
    }

    /**
     * Handle URL hash navigation
     */
    handleHash() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const targetTab = this.tabs.find(tab => tab.dataset.tab === hash);
            if (targetTab) {
                this.switchTab(hash);
                return;
            }
        }
        
        // Default to first tab if no valid hash
        if (this.tabs.length > 0 && !this.currentTab) {
            this.switchTab(this.tabs[0].dataset.tab);
        }
    }

    /**
     * Switch to a specific tab
     * @param {string} tabId - ID of tab to switch to
     */
    switchTab(tabId) {
        if (this.currentTab === tabId) return;

        // Update tab buttons
        this.tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });

        // Update tab content
        this.tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });

        // Update URL hash
        history.replaceState(null, null, `#${tabId}`);

        // Scroll to tabs if needed
        this.scrollToTabsIfNeeded();

        // Update current tab and notify listeners
        const oldTab = this.currentTab;
        this.currentTab = tabId;
        this.listeners.forEach(callback => callback(tabId, oldTab));
    }

    /**
     * Scroll to tabs container if user has scrolled past it
     */
    scrollToTabsIfNeeded() {
        const tabsContainer = document.getElementById('tabsContainer');
        if (tabsContainer && window.scrollY > tabsContainer.offsetTop) {
            tabsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Get current active tab
     * @returns {string} Current tab ID
     */
    getCurrentTab() {
        return this.currentTab;
    }

    /**
     * Add tab change listener
     * @param {Function} callback - Callback(newTab, oldTab)
     */
    onChange(callback) {
        this.listeners.push(callback);
    }

    /**
     * Remove tab change listener
     * @param {Function} callback - Callback to remove
     */
    offChange(callback) {
        this.listeners = this.listeners.filter(cb => cb !== callback);
    }
}

// Create singleton instance
export const navigationService = new NavigationService();

