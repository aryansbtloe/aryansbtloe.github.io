/**
 * DOM Utility Functions
 * Helper functions for DOM manipulation
 */

/**
 * Safely get element by ID
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} Element or null
 */
export function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found`);
    }
    return element;
}

/**
 * Safely query selector
 * @param {string} selector - CSS selector
 * @param {HTMLElement} parent - Parent element (default: document)
 * @returns {HTMLElement|null} Element or null
 */
export function querySelector(selector, parent = document) {
    const element = parent.querySelector(selector);
    if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
    }
    return element;
}

/**
 * Safely query selector all
 * @param {string} selector - CSS selector
 * @param {HTMLElement} parent - Parent element (default: document)
 * @returns {Array<HTMLElement>} Array of elements
 */
export function querySelectorAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}

/**
 * Create element with attributes and content
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {string|HTMLElement|Array} children - Child content
 * @returns {HTMLElement} Created element
 */
export function createElement(tag, attributes = {}, children = null) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else {
            element.setAttribute(key, value);
        }
    });
    
    // Add children
    if (children) {
        if (Array.isArray(children)) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else {
                    element.appendChild(child);
                }
            });
        } else if (typeof children === 'string') {
            element.textContent = children;
        } else {
            element.appendChild(children);
        }
    }
    
    return element;
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
export function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Set text content safely
 * @param {HTMLElement} element - Element to update
 * @param {string} text - Text content
 */
export function setText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

/**
 * Set HTML content safely (use with caution)
 * @param {HTMLElement} element - Element to update
 * @param {string} html - HTML content
 */
export function setHtml(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}

/**
 * Toggle class on element
 * @param {HTMLElement} element - Element to toggle class on
 * @param {string} className - Class name
 * @param {boolean} force - Force add/remove
 */
export function toggleClass(element, className, force = undefined) {
    if (element) {
        element.classList.toggle(className, force);
    }
}

/**
 * Add event listener with automatic cleanup
 * @param {HTMLElement} element - Element to attach listener to
 * @param {string} event - Event name
 * @param {Function} callback - Event callback
 * @returns {Function} Cleanup function
 */
export function on(element, event, callback) {
    if (element) {
        element.addEventListener(event, callback);
        return () => element.removeEventListener(event, callback);
    }
    return () => {};
}

/**
 * Wait for DOM to be ready
 * @param {Function} callback - Callback to run when ready
 */
export function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

/**
 * Smooth scroll to element
 * @param {HTMLElement} element - Element to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollTo(element, options = {}) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            ...options
        });
    }
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in ms
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

