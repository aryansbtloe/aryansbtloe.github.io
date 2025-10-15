// Theme toggle with persistence
(function () {
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

// Year
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Tab Navigation
(function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Handle hash navigation on load
    const handleHash = () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const targetTab = document.querySelector(`[data-tab="${hash}"]`);
            if (targetTab) {
                switchTab(hash);
            }
        }
    };
    
    const switchTab = (tabId) => {
        // Update tab buttons
        tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });
        
        // Update tab content
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
        
        // Update URL hash
        history.replaceState(null, null, `#${tabId}`);
        
        // Scroll to tabs if not in view
        const tabsContainer = document.getElementById('tabsContainer');
        if (tabsContainer && window.scrollY > tabsContainer.offsetTop) {
            tabsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
    
    // Handle hash on load
    handleHash();
    window.addEventListener('hashchange', handleHash);
})();

// Apps Grid - Embedded data (offline-ready)
(function loadApps() {
    const appsGrid = document.getElementById('appsGrid');
    if (!appsGrid) return;
    
    // Embedded app data - using local high-quality images
    const apps = [
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
    ];
    
    // Sort by rating count
    apps.sort((a, b) => (b.userRatingCount || 0) - (a.userRatingCount || 0));
    
    // Render apps in App Store style
                apps.forEach(app => {
        const link = document.createElement('a');
        link.href = app.trackViewUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'app-card';
        
        const rating = app.averageUserRating || 0;
        const reviews = app.userRatingCount || 0;
        const price = app.price === 0 ? 'GET' : `$${app.price.toFixed(2)}`;
        
        link.innerHTML = `
            <div class="app-icon">
                <img src="${app.artworkUrl100}" alt="${app.trackName}" loading="lazy">
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
        
        appsGrid.appendChild(link);
    });
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length <= 1) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
