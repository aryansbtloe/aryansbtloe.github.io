/**
 * Experience Card Component
 * Renders work experience timeline items with achievements
 */

export class ExperienceCard {
    constructor(data) {
        this.data = data;
    }

    /**
     * Create and return experience card element
     * @returns {HTMLElement} Experience timeline item
     */
    render() {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const hasAchievements = this.data.achievements && this.data.achievements.length > 0;
        const location = this.data.location || '';
        const responsibilities = this.data.responsibilities || [];
        
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="experience-header">
                    <img class="experience-logo" 
                         src="${this.escapeHtml(this.data.logo)}" 
                         onerror="this.src='logos/default.svg'" 
                         alt="${this.escapeHtml(this.data.company)}">
                    <div>
                        <h3>${this.escapeHtml(this.data.title)}</h3>
                        <p class="company-name">${this.escapeHtml(this.data.company)}</p>
                        <p class="date-range">${this.escapeHtml(this.data.period)}</p>
                        ${location ? `<p class="location">📍 ${this.escapeHtml(location)}</p>` : ''}
                    </div>
                </div>
                
                ${this.data.note ? `<p class="experience-note">${this.escapeHtml(this.data.note)}</p>` : ''}
                
                <ul class="experience-list">
                    ${responsibilities.slice(0, 5).map(resp => 
                        `<li>${this.escapeHtml(resp)}</li>`
                    ).join('')}
                </ul>
                
                ${responsibilities.length > 5 ? `
                    <details class="experience-more">
                        <summary>Show ${responsibilities.length - 5} more responsibilities</summary>
                        <ul class="experience-list">
                            ${responsibilities.slice(5).map(resp => 
                                `<li>${this.escapeHtml(resp)}</li>`
                            ).join('')}
                        </ul>
                    </details>
                ` : ''}
                
                ${hasAchievements ? `
                    <div class="experience-achievements">
                        <h4>🏆 Key Achievements</h4>
                        <div class="achievements-grid">
                            ${this.data.achievements.map(achievement => 
                                `<span class="achievement-badge">${this.escapeHtml(achievement)}</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        return item;
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
 * Render multiple experience cards
 * @param {Array} experiences - Array of experience data
 * @param {HTMLElement} container - Container to render into
 */
export function renderExperience(experiences, container) {
    if (!container) {
        console.warn('ExperienceCard: Container element not found');
        return;
    }

    // Clear container
    container.innerHTML = '';

    // Render each experience
    experiences.forEach(expData => {
        const card = new ExperienceCard(expData);
        container.appendChild(card.render());
    });
}

