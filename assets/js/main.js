/**
 * Portfolio Main Entry Point
 * Initializes all services and components
 */

import portfolioData from './config/data.js';
import { themeService } from './services/ThemeService.js';
import { navigationService } from './services/NavigationService.js';
import { renderApps, AppSortFunctions } from './components/AppCard.js';
import { renderExperience } from './components/ExperienceCard.js';
import { renderSkills } from './components/SkillCard.js';
import { getElement, querySelectorAll, setText, onReady } from './utils/dom.js';

/**
 * Initialize the portfolio application
 */
function initPortfolio() {
    // 1. Initialize Theme Service
    themeService.init();
    setupThemeToggle();

    // 2. Initialize Navigation Service
    const tabs = querySelectorAll('.tab');
    const tabContents = querySelectorAll('.tab-content');
    navigationService.init(tabs, tabContents);

    // 3. Render Dynamic Content
    renderSkillsGrid();
    renderAppsGrid();
    renderExperienceTimeline();
    updateCopyrightYear();

    // 4. Setup Smooth Scrolling
    setupSmoothScrolling();

    console.log('✨ Portfolio initialized successfully');
}

/**
 * Setup theme toggle button
 */
function setupThemeToggle() {
    const themeToggle = getElement('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeService.toggle();
        });
    }
}

/**
 * Render skills grid
 */
function renderSkillsGrid() {
    const skillsGrid = getElement('skillsGrid');
    if (skillsGrid && portfolioData.skills) {
        renderSkills(portfolioData.skills, skillsGrid);
    }
}

/**
 * Render apps grid
 */
function renderAppsGrid() {
    const appsGrid = getElement('appsGrid');
    if (appsGrid && portfolioData.apps) {
        renderApps(
            portfolioData.apps,
            appsGrid,
            AppSortFunctions.byRatingCount
        );
    }
}

/**
 * Render experience timeline
 */
function renderExperienceTimeline() {
    const timeline = document.querySelector('.timeline');
    if (timeline && portfolioData.experience) {
        renderExperience(portfolioData.experience, timeline);
    }
}

/**
 * Update copyright year
 */
function updateCopyrightYear() {
    const yearEl = getElement('year');
    if (yearEl) {
        setText(yearEl, new Date().getFullYear().toString());
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length <= 1) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// Initialize when DOM is ready
onReady(initPortfolio);

// Export for debugging
if (typeof window !== 'undefined') {
    window.portfolioDebug = {
        data: portfolioData,
        theme: themeService,
        navigation: navigationService
    };
}

