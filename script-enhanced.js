// Enhanced Portfolio Script - Bundled for Direct File Loading
// All modules combined into one file for compatibility

// ============================================
// Data Configuration
// ============================================
const portfolioData = {
    personal: {
        name: "Alok Singh",
        jobTitle: "Senior Software Engineer",
        company: "Grab",
        location: "Bangalore, India",
        phone: "+91 8287757210",
        email: "alok.singh.confident@gmail.com",
        tagline: "10+ Years of iOS Excellence | Swift, SwiftUI, Objective-C | Building Scalable Apps",
        resumeFile: "alok.singh.ios.resume.pdf",
        totalExperience: "10+ Years",
    },

    skills: [
        {
            icon: "📱",
            title: "iOS Development",
            description: "Swift, SwiftUI, UIKit, Objective‑C, 20+ Apps on App Store"
        },
        {
            icon: "⚡",
            title: "Architecture",
            description: "MVVM, VIPER, Coordinators, Clean Architecture"
        },
        {
            icon: "🔄",
            title: "Frameworks",
            description: "Combine, Concurrency, Core Data, Realm, SQLite"
        },
        {
            icon: "🚀",
            title: "CI/CD & Tools",
            description: "Fastlane, Xcode Cloud, GitHub Actions, SonarCube"
        },
        {
            icon: "🤖",
            title: "AI & Modern Tech",
            description: "Cursor, Generative AI, Flutter, React Native"
        },
        {
            icon: "📊",
            title: "Analytics & Monitoring",
            description: "Firebase, Google Analytics, DataDog, Moengage, Singular"
        }
    ],

    experience: [
        {
            company: "Grab",
            logo: "https://logo.clearbit.com/grab.com?size=64",
            title: "Senior Software Engineer",
            period: "Jan 2021 – Present",
            location: "Singapore/Bangalore",
            responsibilities: [
                "Revamped legacy modules across Consumer, Driver, and Merchant apps, improving performance, maintainability, and developer experience",
                "Enhanced code quality by significantly improving Unit test, UI test, and snapshot test coverage",
                "Led end-to-end CI/CD development, establishing efficient pipelines to support continuous integration, automated testing, and smooth deployment workflows",
                "Collaborated cross-functionally with product managers, designers, and other engineering teams to design and implement scalable software solutions",
                "Mentored junior engineers, encouraging growth through code reviews, technical guidance, and promoting Agile and software development best practices"
            ],
            achievements: [
                "Patent Champion - Led innovation initiatives",
                "Improved CI/CD efficiency by 40%",
                "Reduced production issues by 50% through code reviews"
            ]
        },
        {
            company: "OYO",
            logo: "https://logo.clearbit.com/oyorooms.com?size=64",
            title: "SDE 3 · iOS, Backend",
            period: "Nov 2018 – Jan 2021",
            location: "Gurugram, India",
            responsibilities: [
                "Individual contributor responsible for core development of OYO's consumer-facing iOS app in a fast-paced, large-scale environment",
                "Led multiple major product revamps over 2 years, resulting in significantly improved user experience and app performance",
                "Improved App Store rating from 3.7 to 4.7, driven by UX improvements, crash reduction, and performance enhancements",
                "Implemented unit testing infrastructure, increasing code coverage from 4% to 32%, greatly improving reliability and confidence in code changes",
                "Maintained >99.97% crash-free sessions, improving app stability and reducing user complaints"
            ],
            achievements: [
                "App Store Rating: 3.7 → 4.7 (27% improvement)",
                "Test Coverage: 4% → 32% (700% increase)",
                "Crash-free Sessions: >99.97%",
                "Mentored 10+ engineers"
            ]
        },
        {
            company: "GlobalLogic",
            logo: "https://logo.clearbit.com/globallogic.com?size=64",
            title: "Sr. iOS Developer",
            period: "Sep 2017 – Nov 2018",
            location: "Noida, India",
            responsibilities: [
                "Led end-to-end iOS application development as a standalone contributor",
                "Collaborated with cross-functional teams including designers, backend engineers, and business analysts",
                "Participated in UI design and user behavior analysis",
                "Designed and optimized fraud detection algorithms"
            ]
        },
        {
            company: "Orahi",
            logo: "logos/companies/orahi.png",
            title: "Sr. iOS Developer",
            period: "Feb 2016 – Sep 2017",
            location: "India",
            responsibilities: [
                "Led end-to-end iOS application development from architecture to deployment",
                "Collaborated with designers, backend engineers, and business analysts to deliver feature-rich applications",
                "Contributed to UI/UX design and user behavior analysis",
                "Played a key role in hiring and onboarding, conducting interviews and mentoring junior developers",
                "Ensured high product quality through rigorous testing and debugging"
            ]
        },
        {
            company: "AppInventiv",
            logo: "logos/companies/appinventiv.png",
            title: "Sr. iOS Developer",
            period: "Feb 2014 – Sep 2016",
            location: "India",
            responsibilities: [
                "Developed and maintained multiple iOS applications from concept to deployment",
                "Collaborated with cross-functional teams to define and implement app features",
                "Contributed to software architecture discussions, driving decisions around best practices for scalable codebases",
                "Advocated for creativity in UI/UX, regularly enhancing visual and interactive elements",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            company: "Konstant Infosolutions",
            logo: "logos/companies/konstant.png",
            title: "iOS Developer",
            period: "Mar 2013 – Feb 2014",
            location: "India",
            responsibilities: [
                "Built iOS applications following best practices and design patterns",
                "Collaborated with designers and backend teams to integrate APIs and services",
                "Participated in all phases of the software development lifecycle",
                "Ensured code quality and application performance",
                "Adapted quickly in fast-paced environments, taking full ownership of deliverables"
            ]
        },
        {
            company: "Ayansys Solutions",
            logo: "logos/companies/ayansys.png",
            title: "iOS Developer",
            period: "Apr 2011 – Mar 2013",
            location: "India",
            responsibilities: [
                "Started professional iOS development career building native applications",
                "Worked on multiple client projects from requirements gathering to deployment",
                "Developed proficiency in Objective-C, iOS SDK, and Xcode",
                "Collaborated with teams to deliver quality applications on schedule",
                "Built strong foundation in iOS development fundamentals"
            ]
        }
    ],

    apps: [
        {trackName:"Currency Converter : Fast",primaryGenreName:"Finance",averageUserRating:4.71429,userRatingCount:7,price:0,trackViewUrl:"https://apps.apple.com/us/app/currency-converter-fast/id1509291290?uo=4",artworkUrl100:"logos/apps/currency-converter.jpg"},
        {trackName:"Tic Tac Toe : Time Pass",primaryGenreName:"Games",averageUserRating:3.84615,userRatingCount:13,price:0,trackViewUrl:"https://apps.apple.com/us/app/tic-tac-toe-time-pass/id1509555889?uo=4",artworkUrl100:"logos/apps/tic-tac-toe.jpg"},
        {trackName:"Medicine - Tracker n Reminder",primaryGenreName:"Medical",averageUserRating:4.66667,userRatingCount:6,price:0,trackViewUrl:"https://apps.apple.com/us/app/medicine-tracker-n-reminder/id1660782134?uo=4",artworkUrl100:"logos/apps/medicine-tracker.jpg"},
        {trackName:"Haptics Explorer",primaryGenreName:"Developer Tools",averageUserRating:4.75,userRatingCount:4,price:0,trackViewUrl:"https://apps.apple.com/us/app/haptics-explorer/id1660403082?uo=4",artworkUrl100:"logos/apps/haptics-explorer.jpg"},
        {trackName:"Exotic Wallpapers HD",primaryGenreName:"Photo & Video",averageUserRating:5,userRatingCount:4,price:0,trackViewUrl:"https://apps.apple.com/us/app/exotic-wallpapers-hd/id6443850234?uo=4",artworkUrl100:"logos/apps/exotic-wallpapers.jpg"},
        {trackName:"Facts and Quotes",primaryGenreName:"Health & Fitness",averageUserRating:4.75,userRatingCount:4,price:0,trackViewUrl:"https://apps.apple.com/us/app/facts-and-quotes/id1607878544?uo=4",artworkUrl100:"logos/apps/facts-and-quotes.jpg"},
        {trackName:"Marbles Popperz",primaryGenreName:"Games",averageUserRating:5,userRatingCount:2,price:0,trackViewUrl:"https://apps.apple.com/us/app/marbles-popperz/id1601511276?uo=4",artworkUrl100:"logos/apps/marbles-popperz.jpg"},
        {trackName:"Speck Match",primaryGenreName:"Games",averageUserRating:5,userRatingCount:1,price:0,trackViewUrl:"https://apps.apple.com/us/app/speck-match/id1600688336?uo=4",artworkUrl100:"logos/apps/speck-match.jpg"},
        {trackName:"UI Catalogue",primaryGenreName:"Developer Tools",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/ui-catalogue/id6476453969?uo=4",artworkUrl100:"logos/apps/ui-catalogue.jpg"},
        {trackName:"Data Structure with Algorithms",primaryGenreName:"Education",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/data-structure-with-algorithms/id6475613341?uo=4",artworkUrl100:"logos/apps/data-structure.jpg"},
        {trackName:"Drums n Piano",primaryGenreName:"Music",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/drums-n-piano/id6449846127?uo=4",artworkUrl100:"logos/apps/drums-piano.jpg"},
        {trackName:"Scan Via Cam",primaryGenreName:"Productivity",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/scan-via-cam/id6446734025?uo=4",artworkUrl100:"logos/apps/scan-via-cam.jpg"},
        {trackName:"Hashtags Creator",primaryGenreName:"Social Networking",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/hashtags-creator/id6443919360?uo=4",artworkUrl100:"logos/apps/hashtags-creator.jpg"},
        {trackName:"Tuner - Chromatic Guitar Tuner",primaryGenreName:"Utilities",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/tuner-chromatic-guitar-tuner/id6444090815?uo=4",artworkUrl100:"logos/apps/tuner.jpg"},
        {trackName:"Push Notification - Client",primaryGenreName:"Developer Tools",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/push-notification-client/id1569935047?uo=4",artworkUrl100:"logos/apps/push-notification.jpg"},
        {trackName:"Converter : Units",primaryGenreName:"Productivity",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/converter-units/id1569764832?uo=4",artworkUrl100:"logos/apps/converter-units.jpg"},
        {trackName:"Mic to Speaker - Virtual Mic",primaryGenreName:"Music",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/mic-to-speaker-virtual-mic/id1569763953?uo=4",artworkUrl100:"logos/apps/mic-to-speaker.jpg"},
        {trackName:"Daily Pills : Reminder",primaryGenreName:"Health & Fitness",averageUserRating:0,userRatingCount:0,price:0,trackViewUrl:"https://apps.apple.com/us/app/daily-pills-reminder/id1561768913?uo=4",artworkUrl100:"logos/apps/daily-pills.jpg"}
    ]
};

// ============================================
// Theme Management
// ============================================
(function initTheme() {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    
    if (saved) {
        root.setAttribute('data-theme', saved);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            root.setAttribute('data-theme', 'dark');
        }
    }

    if (btn) {
        btn.addEventListener('click', function () {
            const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
})();

// ============================================
// Tab Navigation with Sliding Indicator
// ============================================
(function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs');
    
    // Update sliding indicator position
    const updateIndicator = () => {
        const activeTab = document.querySelector('.tab.active');
        if (!activeTab || !tabsContainer) return;
        
        const containerRect = tabsContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        const left = tabRect.left - containerRect.left;
        const width = tabRect.width;
        
        tabsContainer.style.setProperty('--indicator-left', `${left}px`);
        tabsContainer.style.setProperty('--indicator-width', `${width}px`);
        tabsContainer.classList.add('has-active');
    };
    
    // Set CSS custom properties for the indicator
    if (tabsContainer) {
        const style = document.createElement('style');
        style.textContent = `
            .tabs::after {
                left: var(--indicator-left, 0);
                width: var(--indicator-width, 0);
            }
        `;
        document.head.appendChild(style);
    }
    
    const switchTab = (tabId) => {
        tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });
        
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
        
        history.replaceState(null, null, `#${tabId}`);
        
        // Update sliding indicator
        setTimeout(updateIndicator, 10);
        
        const tabsContainerEl = document.getElementById('tabsContainer');
        if (tabsContainerEl && window.scrollY > tabsContainerEl.offsetTop) {
            tabsContainerEl.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
    
    const handleHash = () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const targetTab = document.querySelector(`[data-tab="${hash}"]`);
            if (targetTab) {
                switchTab(hash);
            }
        }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    
    // Initialize indicator position
    setTimeout(updateIndicator, 100);
    
    // Update on resize
    window.addEventListener('resize', updateIndicator);
})();

// ============================================
// Render Skills
// ============================================
(function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;
        container.appendChild(card);
    });
})();

// ============================================
// Render Experience
// ============================================
(function renderExperience() {
    const container = document.querySelector('.timeline');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const achievements = exp.achievements ? `
            <div class="experience-achievements">
                <h4>🏆 Key Achievements</h4>
                <div class="achievements-grid">
                    ${exp.achievements.map(a => `<span class="achievement-badge">${a}</span>`).join('')}
                </div>
            </div>
        ` : '';
        
        const location = exp.location ? `<p class="location">📍 ${exp.location}</p>` : '';
        const note = exp.note ? `<p class="experience-note">${exp.note}</p>` : '';
        
        const responsibilitiesToShow = exp.responsibilities.slice(0, 5);
        const moreResponsibilities = exp.responsibilities.slice(5);
        
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="experience-header">
                    <img class="experience-logo" src="${exp.logo}" onerror="this.src='logos/default.svg'" alt="${exp.company}">
                    <div>
                        <h3>${exp.title}</h3>
                        <p class="company-name">${exp.company}</p>
                        <p class="date-range">${exp.period}</p>
                        ${location}
                    </div>
                </div>
                ${note}
                <ul class="experience-list">
                    ${responsibilitiesToShow.map(r => `<li>${r}</li>`).join('')}
                </ul>
                ${moreResponsibilities.length > 0 ? `
                    <details class="experience-more">
                        <summary>Show ${moreResponsibilities.length} more responsibilities</summary>
                        <ul class="experience-list">
                            ${moreResponsibilities.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </details>
                ` : ''}
                ${achievements}
            </div>
        `;
        
        container.appendChild(item);
    });
})();

// ============================================
// Render Apps
// ============================================
(function renderApps() {
    const container = document.getElementById('appsGrid');
    if (!container) return;
    
    const apps = [...portfolioData.apps].sort((a, b) => 
        (b.userRatingCount || 0) - (a.userRatingCount || 0)
    );
    
    apps.forEach(app => {
        const link = document.createElement('a');
        link.href = app.trackViewUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'app-card';
        
        const rating = app.averageUserRating || 0;
        const price = app.price === 0 ? 'GET' : `$${app.price.toFixed(2)}`;
        
        link.innerHTML = `
            <div class="app-icon">
                <img src="${app.artworkUrl100}" alt="${app.trackName}" loading="lazy" onerror="this.src='logos/default.svg'">
            </div>
            <div class="app-body">
                <p class="app-category">${app.primaryGenreName}</p>
                <h3>${app.trackName}</h3>
                <div class="app-stats">
                    ${rating > 0 ? `<span class="app-badge app-rating">⭐ ${rating.toFixed(1)}</span>` : ''}
                    <span class="app-badge app-price">${price}</span>
                </div>
            </div>
        `;
        
        container.appendChild(link);
    });
})();

// ============================================
// Generate Contribution Graph
// ============================================
(function generateContributionGraph() {
    const container = document.getElementById('contributionGraph');
    if (!container) return;
    
    // Generate 365 days of dummy data
    const days = 365;
    const weeks = 53;
    let totalContributions = 0;
    
    for (let week = 0; week < weeks; week++) {
        for (let day = 0; day < 7; day++) {
            const index = week * 7 + day;
            if (index >= days) break;
            
            // Generate random contribution level (0-4)
            // Weighted to show realistic activity pattern
            const random = Math.random();
            let level;
            if (random < 0.15) level = 0; // 15% no activity
            else if (random < 0.40) level = 1; // 25% low activity
            else if (random < 0.70) level = 2; // 30% medium activity
            else if (random < 0.90) level = 3; // 20% high activity
            else level = 4; // 10% very high activity
            
            // Calculate contributions based on level
            const contributions = level === 0 ? 0 : 
                                 level === 1 ? Math.floor(Math.random() * 3) + 1 :
                                 level === 2 ? Math.floor(Math.random() * 5) + 3 :
                                 level === 3 ? Math.floor(Math.random() * 7) + 6 :
                                 Math.floor(Math.random() * 10) + 10;
            
            totalContributions += contributions;
            
            const dayElement = document.createElement('div');
            dayElement.className = `contribution-day level-${level}`;
            dayElement.title = `${contributions} contributions`;
            dayElement.setAttribute('data-level', level);
            dayElement.setAttribute('data-contributions', contributions);
            
            container.appendChild(dayElement);
        }
    }
    
    // Update total contributions count
    const totalEl = document.getElementById('totalContributions');
    if (totalEl) {
        totalEl.textContent = '—';
    }
})();

// ============================================
// Medium Highlights (RSS → Top 3)
// ============================================
(function renderMediumHighlights() {
    const grid = document.getElementById('mediumGrid');
    if (!grid) return;

    const profile = 'alok.singh.confident';
    const rssUrl = `https://medium.com/feed/@${profile}`;
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    // Helper: build card
    const buildCard = (post) => {
        const url = post.link;
        const title = post.title;
        const desc = (post.description || '').replace(/<[^>]+>/g, '').slice(0, 120) + '…';
        const tag = (post.categories && post.categories[0]) ? post.categories[0] : 'Medium';
        const read = post.pubDate ? new Date(post.pubDate).toLocaleDateString() : '';
        return `
            <a class="medium-card" href="${url}" target="_blank" rel="noopener">
                <div class="medium-tag">${tag}</div>
                <h3>${title}</h3>
                <p>${desc}</p>
                <div class="meta">${read} · Medium</div>
            </a>
        `;
    };

    // Attempt fetch, but preserve existing content if fails
    fetch(api)
        .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to load RSS')))
        .then(json => {
            if (!json || !json.items || !Array.isArray(json.items)) return;
            const posts = json.items.filter(i => i && i.link && !i.link.includes('responses')).slice(0, 3);
            if (!posts.length) return;
            grid.innerHTML = posts.map(buildCard).join('');
        })
        .catch(() => {
            // leave the static fallback in place
        });
})();

// ============================================
// Update Year
// ============================================
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ============================================
// Smooth Scrolling & Tab Navigation from Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length <= 1) return;
        
        e.preventDefault();
        const targetId = href.slice(1); // Remove the #
        
        // Check if it's a tab
        const tabButton = document.querySelector(`[data-tab="${targetId}"]`);
        if (tabButton) {
            // Trigger tab click
            tabButton.click();
            
            // Scroll to tabs container
            const tabsContainer = document.getElementById('tabsContainer');
            if (tabsContainer) {
                setTimeout(() => {
                    tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // Regular smooth scroll for non-tab links
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

console.log('✨ Portfolio initialized successfully');

