/**
 * Skill Card Component
 * Renders skill cards for the skills grid
 */

export class SkillCard {
    constructor(data) {
        this.data = data;
    }

    /**
     * Create and return skill card element
     * @returns {HTMLElement} Skill card element
     */
    render() {
        const card = document.createElement('div');
        card.className = 'skill-card';
        
        card.innerHTML = `
            <div class="skill-icon">${this.escapeHtml(this.data.icon)}</div>
            <h3>${this.escapeHtml(this.data.title)}</h3>
            <p>${this.escapeHtml(this.data.description)}</p>
        `;
        
        return card;
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
 * Render multiple skill cards
 * @param {Array} skills - Array of skill data
 * @param {HTMLElement} container - Container to render into
 */
export function renderSkills(skills, container) {
    if (!container) {
        console.warn('SkillCard: Container element not found');
        return;
    }

    // Clear container
    container.innerHTML = '';

    // Render each skill
    skills.forEach(skillData => {
        const card = new SkillCard(skillData);
        container.appendChild(card.render());
    });
}

