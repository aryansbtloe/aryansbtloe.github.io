// Enhanced Portfolio Script - Bundled for Direct File Loading
// All modules combined into one file for compatibility

// ============================================
// Data Configuration
// ============================================
const portfolioData = {
    personal: {
        name: "Alok Singh",
        jobTitle: "Ex-Grab · Senior Software Engineer",
        company: "Grab",
        location: "Gurugram, India",
        phone: "+91 8287757210",
        email: "alok.singh.confident@gmail.com",
        tagline: "5 years at Grab. iOS, Android, web, and backend — 15+ years, 50+ apps.",
        resumeFile: "alok.singh.ios.resume.pdf",
        totalExperience: "15+ Years",
    },

    skills: [
        {
            icon: "📱",
            title: "iOS",
            description: "Swift, SwiftUI, UIKit, Objective‑C, Combine, concurrency"
        },
        {
            icon: "🤖",
            title: "Android",
            description: "Kotlin, Jetpack Compose, MVVM / MVI, Room, Coroutines, KMP"
        },
        {
            icon: "🌐",
            title: "Web",
            description: "React Native, HTML/JS, product web clients, responsive UI"
        },
        {
            icon: "🖥️",
            title: "Backend",
            description: "REST APIs, Java / Spring Boot, auth, payments, service design"
        },
        {
            icon: "✨",
            title: "AI-native / vibe coding",
            description: "Cursor, agents, repo rules, review gates, ship-then-harden"
        },
        {
            icon: "⚡",
            title: "Architecture",
            description: "MVVM, MVI, VIPER, RIBs, Clean Architecture, modularization"
        },
        {
            icon: "🚀",
            title: "CI/CD & quality",
            description: "Fastlane, Xcode Cloud, GitHub Actions, tests, crash-free ops"
        },
        {
            icon: "📊",
            title: "Analytics & growth",
            description: "Firebase, DataDog, Moengage, Singular, ASO, retention loops"
        }
    ],

    experience: [
        {
            company: "PRISM",
            logo: "logos/companies/prism.png",
            title: "SDE 4",
            period: "Apr 2026 – Present",
            location: "Gurugram, India",
            responsibilities: [
                "Senior mobile engineer on large-scale consumer systems",
                "Shipping iOS features and mentoring across the engineering org"
            ]
        },
        {
            company: "Grab",
            logo: "logos/companies/grab.png",
            title: "Senior Software Engineer",
            period: "Jan 2021 – Mar 2026",
            location: "Singapore/Bangalore",
            featured: true,
            featuredLabel: "5 years · primary experience",
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
            company: "PRISM",
            logo: "logos/companies/prism.png",
            title: "SDE 2 → SDE 3 · iOS, Backend",
            period: "Nov 2018 – Jan 2021",
            location: "Gurugram, India",
            note: "Product: OYO Rooms consumer iOS",
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
            logo: "logos/companies/globallogic.png",
            title: "Associate Consultant",
            period: "Oct 2017 – Oct 2018",
            location: "Noida, India",
            note: "Client: Kohl's e-commerce iOS",
            responsibilities: [
                "Led end-to-end iOS application development as a standalone contributor on the Kohl's shopping app",
                "Collaborated with cross-functional teams including designers, backend engineers, and business analysts",
                "Participated in UI design and user behavior analysis",
                "Designed and optimized fraud detection algorithms"
            ]
        },
        {
            company: "Orahi",
            logo: "logos/companies/orahi.png",
            title: "Sr. iOS Developer Lead",
            period: "Feb 2016 – Sep 2017",
            location: "Gurugram, India",
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
            period: "Feb 2014 – Jan 2016",
            location: "Noida, India",
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
            title: "Sr. iOS Developer",
            period: "Mar 2013 – Feb 2014",
            location: "Jaipur, India",
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
        {trackName:"Mic to Speaker - Virtual Mic",primaryGenreName:"Music",averageUserRating:4.49838,userRatingCount:3409,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/mic-to-speaker-virtual-mic/id1514011963",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/93/b0/4493b030-7b54-3438-1c7a-c23d847c0412/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Bible Study AI - Read Offline",primaryGenreName:"Book",averageUserRating:4.56637,userRatingCount:113,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/bible-study-ai-read-offline/id1508795537",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/69/a0/3d/69a03db6-7c29-ff96-ed52-534d0bc9b0e9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Push Notification - Client",primaryGenreName:"Developer Tools",averageUserRating:4.12069,userRatingCount:58,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/push-notification-client/id1516378834",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/74/47/ed/7447ed78-328c-46ef-5a67-3af95d041f1f/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"DSA Master - Data & Algorithms",primaryGenreName:"Education",averageUserRating:4.2,userRatingCount:35,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/dsa-master-data-algorithms/id1672776683",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/f8/7f/d0f87f58-3b01-3182-a96e-54211df3dcd1/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Units Converter & Calculator",primaryGenreName:"Productivity",averageUserRating:4.71875,userRatingCount:32,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/units-converter-calculator/id1515811220",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d8/96/c3/d896c318-4de7-fa13-5381-2b28f5c2d129/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Guitar Tuner: Chromatic",primaryGenreName:"Music",averageUserRating:4.10714,userRatingCount:28,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/guitar-tuner-chromatic/id1518293355",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f5/b4/53/f5b453fb-e7a2-9621-3568-27d76a4b97d9/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Hanuman Chalisa : Offline",primaryGenreName:"Book",averageUserRating:4.77273,userRatingCount:22,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/hanuman-chalisa-offline/id1509206340",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/84/54/72/84547281-a1d9-dda6-b3b2-93f96bfa57a5/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"},
        {trackName:"Tic Tac Toe : Time Pass",primaryGenreName:"Games",averageUserRating:3.84615,userRatingCount:13,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/tic-tac-toe-time-pass/id1509555889",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8b/ba/d2/8bbad2b0-dff3-4c2d-26d4-b74fdacae6f3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"},
        {trackName:"Drums n Piano",primaryGenreName:"Music",averageUserRating:4.44444,userRatingCount:9,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/drums-n-piano/id1642061667",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/7b/74/34/7b743487-ae67-3588-9844-d228e3e0131e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"},
        {trackName:"Daily Pills | Reminder",primaryGenreName:"Health & Fitness",averageUserRating:4.375,userRatingCount:8,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/daily-pills-reminder/id1510203960",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c9/b1/c4/c9b1c443-13d3-403e-0d4f-a39daec0f718/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Currency Converter : Fast",primaryGenreName:"Finance",averageUserRating:4.71429,userRatingCount:7,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/currency-converter-fast/id1509291290",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/15/cc/6715cc04-151b-fa02-969e-2d978cddd2d3/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Track Your Pills",primaryGenreName:"Medical",averageUserRating:4.71429,userRatingCount:7,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/track-your-pills/id1660782134",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6f/e1/84/6fe184ed-6cb5-fbae-8dd4-c173fee4964d/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Scan Via Cam",primaryGenreName:"Productivity",averageUserRating:4.66667,userRatingCount:6,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/scan-via-cam/id1525874032",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/f6/13/c6/f613c665-f841-3b0d-3a66-fb49fcc783ce/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"},
        {trackName:"Wallpapers HD: Exotic 4K",primaryGenreName:"Photo & Video",averageUserRating:5,userRatingCount:6,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/wallpapers-hd-exotic-4k/id6443850234",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1d/6a/04/1d6a043f-0014-7419-0442-2f8454d4a1ef/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Haptics Explorer",primaryGenreName:"Developer Tools",averageUserRating:4.75,userRatingCount:4,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/haptics-explorer/id1660403082",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ce/81/52/ce815269-9963-7b08-3ba5-065a0f7942fe/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Facts and Quotes",primaryGenreName:"Health & Fitness",averageUserRating:5,userRatingCount:3,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/facts-and-quotes/id1607878544",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4a/ba/2d/4aba2dbd-369d-dfe0-8b01-159965b28fdc/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Marbles Popperz",primaryGenreName:"Games",averageUserRating:3.66667,userRatingCount:3,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/marbles-popperz/id1601511276",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/ef/2b/e8ef2b39-bd41-2e1e-a17b-0467df1a3aaa/AppIcon-0-0-1x_U007emarketing-0-8-0-P3-85-220.png/100x100bb.jpg"},
        {trackName:"Catalog - UI",primaryGenreName:"Reference",averageUserRating:3,userRatingCount:2,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/catalog-ui/id6446035510",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/6f/4c/9a6f4c7f-17b8-c51b-797e-01e4039e2452/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Hashtags Creator",primaryGenreName:"Social Networking",averageUserRating:5,userRatingCount:2,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/hashtags-creator/id1522156509",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/3c/cd/0b/3ccd0bb4-af40-ef3a-0f52-d8b95457df47/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"},
        {trackName:"Mandir Darshan",primaryGenreName:"Lifestyle",averageUserRating:5,userRatingCount:1,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/mandir-darshan/id6756669016",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c6/e4/b3/c6e4b3cc-9433-aaeb-e4a2-222c832eeddb/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Speck Match",primaryGenreName:"Games",averageUserRating:5,userRatingCount:1,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/speck-match/id1600688336",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/be/d1/3c/bed13c9b-385c-59c0-0ac5-cf557d3c3a83/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"AdEarnings Pro",primaryGenreName:"Developer Tools",averageUserRating:0,userRatingCount:0,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/adearnings-pro/id6754509445",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/49/f5/10/49f510ac-a372-e241-b079-39f92fd71759/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/100x100bb.jpg"},
        {trackName:"Novels Club",primaryGenreName:"Magazines & Newspapers",averageUserRating:0,userRatingCount:0,price:0,kind:"software",trackViewUrl:"https://apps.apple.com/us/app/novels-club/id6755921578",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e4/03/cf/e403cff8-7ee2-ea93-dc3c-2aad3f753833/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg"},
        {trackName:"Push Notification - Tester",primaryGenreName:"Developer Tools",averageUserRating:0,userRatingCount:0,price:0,kind:"mac-software",trackViewUrl:"https://apps.apple.com/us/app/push-notification-tester/id1516154713",artworkUrl100:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3b/1c/e3/3b1ce3f6-ac02-8f33-fa21-c38dd4df1306/AppIcon-0-0-85-220-0-5-0-2x.png/100x100bb.png"}
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
        item.className = exp.featured ? 'timeline-item featured' : 'timeline-item';
        
        const featured = exp.featured
            ? `<span class="featured-badge">${exp.featuredLabel || 'Featured'}</span>`
            : '';
        
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
                ${featured}
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
        const reviews = app.userRatingCount || 0;
        const reviewsLabel = reviews >= 1000
            ? `${(reviews / 1000).toFixed(1).replace(/\.0$/, '')}K`
            : String(reviews);
        const price = app.price === 0 ? 'GET' : `$${app.price.toFixed(2)}`;
        const category = app.kind === 'mac-software'
            ? `${app.primaryGenreName} · Mac`
            : app.primaryGenreName;
        
        link.innerHTML = `
            <div class="app-icon">
                <img src="${app.artworkUrl100}" alt="${app.trackName}" loading="lazy" onerror="this.src='logos/default.svg'">
            </div>
            <div class="app-body">
                <p class="app-category">${category}</p>
                <h3>${app.trackName}</h3>
                <div class="app-stats">
                    ${rating > 0 ? `<span class="app-badge app-rating">⭐ ${rating.toFixed(1)}${reviews ? ` · ${reviewsLabel}` : ''}</span>` : ''}
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

