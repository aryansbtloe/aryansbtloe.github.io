/**
 * Portfolio Data Configuration
 * Single source of truth for all content
 * Update this file to modify portfolio content
 */

export const portfolioData = {
    // Personal Information
    personal: {
        name: "Alok Singh",
        jobTitle: "Senior Software Engineer",
        company: "Grab",
        location: "Bangalore, India",
        phone: "+91 8287757210",
        email: "alok.singh.confident@gmail.com",
        tagline: "10+ Years of iOS Excellence | Swift, SwiftUI, Objective-C | Building Scalable Apps",
        resumeFile: "alok.singh.ios.resume.pdf",
        logo: "AS",
        
        // Experience Summary
        totalExperience: "10+ Years",
        experienceBreakdown: {
            ios: "10+ Years",
            swift: "8+ Years",
            objectiveC: "7+ Years",
            flutter: "1+ Years",
            macos: "2+ Years",
            backend: "0.5 Years (Java)",
            symbian: "2+ Years (C++)"
        },
        education: "B. Tech | 2010 | First Grade",
        
        // SEO & Meta
        description: "iOS Engineer building and shipping Swift/SwiftUI apps. Explore apps, case studies, skills, resume, and contact.",
        url: "https://aryansbtloe.github.io/",
        image: "logos/default.svg",
        
        // Social Links
        social: {
            linkedin: "https://www.linkedin.com/in/256261/",
            github: "https://github.com/aryansbtloe",
            appStore: "https://apps.apple.com/us/developer/alok-singh/id1508795536"
        }
    },

    // Skills & Technologies
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
    
    // Detailed Technical Skills
    technicalSkills: {
        languages: ["Swift", "Objective-C", "Java", "C++", "C", "Flutter"],
        platforms: ["iOS", "macOS", "Symbian (S60)", "Qt", "React Native", "SpringBoot"],
        databases: ["SQLite", "Core Data", "Realm", "MySQL"],
        tools: ["Xcode", "IntelliJ", "Carbide C++", "Qt Creator", "VS Code", "Charles", "Postman", "Mocky", "Zwoptex", "Photoshop"],
        analytics: ["Google Analytics", "Moengage", "Singular", "Firebase", "Metabase", "DataDog"],
        cicd: ["Fastlane", "SonarCube", "GitHub Actions", "Xcode Cloud"]
    },

    // Products Worked For
    products: [
        {
            name: "Grab",
            logo: "https://logo.clearbit.com/grab.com?size=80",
            type: "Super App · E‑commerce",
            highlights: [
                "Revamped legacy modules across Consumer, Driver, Merchant apps",
                "Led CI/CD pipeline improvements"
            ],
            rating: 4.8,
            ratingCount: "160K+",
            link: "https://cutt.ly/MjV3lIR"
        },
        {
            name: "OYO Rooms",
            logo: "https://logo.clearbit.com/oyorooms.com?size=80",
            type: "Hospitality · Consumer App",
            highlights: [
                "Improved rating from 3.7 → 4.7",
                "Unit test coverage 4% → 32%"
            ],
            rating: 4.7,
            ratingCount: "160K+",
            link: "https://goo.gl/apNxgc"
        },
        {
            name: "KOHL's",
            logo: "https://logo.clearbit.com/kohls.com?size=80",
            type: "Retail · E‑commerce",
            highlights: [
                "Enhanced iOS experience",
                "Performance optimizations"
            ],
            rating: 5.0,
            ratingCount: "40.5K+",
            link: "https://goo.gl/knMyzL"
        }
    ],

    // Work Experience
    experience: [
        {
            company: "Grab",
            logo: "https://logo.clearbit.com/grab.com?size=64",
            title: "Senior Software Engineer",
            period: "Jan 2021 – Present",
            location: "Singapore/Bangalore",
            type: "Full-time",
            responsibilities: [
                "Revamped legacy modules across Consumer, Driver, and Merchant apps, improving performance, maintainability, and developer experience",
                "Enhanced code quality by significantly improving Unit test, UI test, and snapshot test coverage",
                "Led end-to-end CI/CD development, establishing efficient pipelines to support continuous integration, automated testing, and smooth deployment workflows",
                "Collaborated cross-functionally with product managers, designers, and other engineering teams to design and implement scalable software solutions",
                "Mentored junior engineers, encouraging growth through code reviews, technical guidance, and promoting Agile and software development best practices",
                "Translated complex requirements into functional features, streamlining delivery timelines and ensuring alignment with product goals",
                "Conducted regular code reviews, implementing QA measures that increased code quality and reduced production issues",
                "Led system migrations from legacy architectures to modern solutions, improving scalability and reducing long-term operational costs",
                "Integrated modern payment methods, expanding financial functionality and improving the overall payment experience for users",
                "Troubleshot and resolved complex technical issues, improving system reliability and user experience",
                "Managed multiple high-impact projects simultaneously, maintaining strict deadlines while upholding high-quality standards",
                "Acted as an active code reviewer, maintaining code consistency and engineering excellence across teams",
                "Led patenting meetings as the patent champion, fostering a culture of innovation and IP development"
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
            type: "Full-time",
            responsibilities: [
                "Individual contributor responsible for core development of OYO's consumer-facing iOS app in a fast-paced, large-scale environment",
                "Led multiple major product revamps over 2 years, resulting in significantly improved user experience and app performance",
                "Improved App Store rating from 3.7 to 4.7, driven by UX improvements, crash reduction, and performance enhancements",
                "Implemented unit testing infrastructure, increasing code coverage from 4% to 32%, greatly improving reliability and confidence in code changes",
                "Enhanced app architecture by introducing and refining VIPER, improving modularity, testability, and long-term maintainability",
                "Strengthened app security through implementation of SSL pinning and fraud detection mechanisms",
                "Contributed to widgetization and modularization, improving feature scalability and reducing code duplication",
                "Maintained >99.97% crash-free sessions, improving app stability and reducing user complaints",
                "Mentored 10+ engineers, providing guidance on architecture, code quality, Agile methodologies, and best practices",
                "Led API stability and performance improvements, ensuring a smooth and responsive user experience",
                "Owned end-to-end iOS release lifecycle — from development, testing, and deployment to App Store submission, crash analysis, and stability monitoring",
                "Developed scalable iOS applications using Swift, increasing user engagement and retention",
                "Collaborated with cross-functional teams to design and implement RESTful APIs, enhancing backend reliability and app performance"
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
            type: "Full-time",
            responsibilities: [
                "Led end-to-end iOS application development as a standalone contributor, from architecture and UI/UX design to deployment and maintenance",
                "Collaborated with cross-functional teams including designers, backend engineers, and business analysts to deliver feature-rich, high-performance applications",
                "Participated in UI design and user behavior analysis, contributing to data-driven decisions for feature enhancements",
                "Designed and optimized fraud detection algorithms and improved app security practices",
                "Actively involved in pre-sales efforts, assisting the business analysis team in gathering requirements and evaluating technical feasibility"
            ]
        },
        {
            company: "Orahi",
            logo: "logos/companies/orahi.png",
            title: "Sr. iOS Developer",
            period: "Feb 2016 – Sep 2017",
            location: "India",
            type: "Full-time",
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
            type: "Full-time",
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
            type: "Full-time",
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
            type: "Full-time",
            responsibilities: [
                "Started professional iOS development career building native applications",
                "Worked on multiple client projects from requirements gathering to deployment",
                "Developed proficiency in Objective-C, iOS SDK, and Xcode",
                "Collaborated with teams to deliver quality applications on schedule",
                "Built strong foundation in iOS development fundamentals"
            ]
        }
    ],

    // Personal Apps
    apps: [
        { trackName: "Currency Converter : Fast", primaryGenreName: "Finance", averageUserRating: 4.71429, userRatingCount: 7, price: 0, trackViewUrl: "https://apps.apple.com/us/app/currency-converter-fast/id1509291290?uo=4", artworkUrl100: "logos/apps/currency-converter.jpg" },
        { trackName: "Tic Tac Toe : Time Pass", primaryGenreName: "Games", averageUserRating: 3.84615, userRatingCount: 13, price: 0, trackViewUrl: "https://apps.apple.com/us/app/tic-tac-toe-time-pass/id1509555889?uo=4", artworkUrl100: "logos/apps/tic-tac-toe.jpg" },
        { trackName: "Medicine - Tracker n Reminder", primaryGenreName: "Medical", averageUserRating: 4.66667, userRatingCount: 6, price: 0, trackViewUrl: "https://apps.apple.com/us/app/medicine-tracker-n-reminder/id1660782134?uo=4", artworkUrl100: "logos/apps/medicine-tracker.jpg" },
        { trackName: "Haptics Explorer", primaryGenreName: "Developer Tools", averageUserRating: 4.75, userRatingCount: 4, price: 0, trackViewUrl: "https://apps.apple.com/us/app/haptics-explorer/id1660403082?uo=4", artworkUrl100: "logos/apps/haptics-explorer.jpg" },
        { trackName: "Exotic Wallpapers HD", primaryGenreName: "Photo & Video", averageUserRating: 5, userRatingCount: 4, price: 0, trackViewUrl: "https://apps.apple.com/us/app/exotic-wallpapers-hd/id6443850234?uo=4", artworkUrl100: "logos/apps/exotic-wallpapers.jpg" },
        { trackName: "Facts and Quotes", primaryGenreName: "Health & Fitness", averageUserRating: 4.75, userRatingCount: 4, price: 0, trackViewUrl: "https://apps.apple.com/us/app/facts-and-quotes/id1607878544?uo=4", artworkUrl100: "logos/apps/facts-and-quotes.jpg" },
        { trackName: "Marbles Popperz", primaryGenreName: "Games", averageUserRating: 5, userRatingCount: 2, price: 0, trackViewUrl: "https://apps.apple.com/us/app/marbles-popperz/id1601511276?uo=4", artworkUrl100: "logos/apps/marbles-popperz.jpg" },
        { trackName: "Speck Match", primaryGenreName: "Games", averageUserRating: 5, userRatingCount: 1, price: 0, trackViewUrl: "https://apps.apple.com/us/app/speck-match/id1600688336?uo=4", artworkUrl100: "logos/apps/speck-match.jpg" },
        { trackName: "UI Catalogue", primaryGenreName: "Developer Tools", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/ui-catalogue/id6476453969?uo=4", artworkUrl100: "logos/apps/ui-catalogue.jpg" },
        { trackName: "Data Structure with Algorithms", primaryGenreName: "Education", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/data-structure-with-algorithms/id6475613341?uo=4", artworkUrl100: "logos/apps/data-structure.jpg" },
        { trackName: "Drums n Piano", primaryGenreName: "Music", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/drums-n-piano/id6449846127?uo=4", artworkUrl100: "logos/apps/drums-piano.jpg" },
        { trackName: "Scan Via Cam", primaryGenreName: "Productivity", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/scan-via-cam/id6446734025?uo=4", artworkUrl100: "logos/apps/scan-via-cam.jpg" },
        { trackName: "Hashtags Creator", primaryGenreName: "Social Networking", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/hashtags-creator/id6443919360?uo=4", artworkUrl100: "logos/apps/hashtags-creator.jpg" },
        { trackName: "Tuner - Chromatic Guitar Tuner", primaryGenreName: "Utilities", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/tuner-chromatic-guitar-tuner/id6444090815?uo=4", artworkUrl100: "logos/apps/tuner.jpg" },
        { trackName: "Push Notification - Client", primaryGenreName: "Developer Tools", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/push-notification-client/id1569935047?uo=4", artworkUrl100: "logos/apps/push-notification.jpg" },
        { trackName: "Converter : Units", primaryGenreName: "Productivity", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/converter-units/id1569764832?uo=4", artworkUrl100: "logos/apps/converter-units.jpg" },
        { trackName: "Mic to Speaker - Virtual Mic", primaryGenreName: "Music", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/mic-to-speaker-virtual-mic/id1569763953?uo=4", artworkUrl100: "logos/apps/mic-to-speaker.jpg" },
        { trackName: "Daily Pills : Reminder", primaryGenreName: "Health & Fitness", averageUserRating: 0, userRatingCount: 0, price: 0, trackViewUrl: "https://apps.apple.com/us/app/daily-pills-reminder/id1561768913?uo=4", artworkUrl100: "logos/apps/daily-pills.jpg" }
    ],

    // Open Source & Contributions
    openSource: {
        totalProjects: "30+",
        description: "Active contributor to open source iOS community",
        featured: [
            {
                name: "Cocoa Controls Profile",
                url: "https://www.cocoacontrols.com/authors/aryansbtloe",
                description: "iOS controls and libraries"
            }
        ]
    },

    // GitHub Profile (Static data with option to load dynamically)
    github: {
        username: "aryansbtloe",
        name: "Alok kumar singh",
        avatar: "https://avatars.githubusercontent.com/u/925188?v=4",
        bio: "iOS Engineer at Grab • Bangalore, India",
        profileUrl: "https://github.com/aryansbtloe",
        openSourceContributions: "30+ projects and contributions",
        stats: {
            publicRepos: 235,
            followers: 35,
            following: 16
        },
        repositories: [
            {
                name: "ExperimentWithTesseract",
                description: "OCR experiments with Tesseract library",
                stars: 24,
                language: "C++",
                url: "https://github.com/aryansbtloe/ExperimentWithTesseract"
            },
            {
                name: "resources",
                description: "Development resources and utilities",
                stars: 4,
                language: "Lua",
                url: "https://github.com/aryansbtloe/resources"
            },
            {
                name: "PDFParsingDemo",
                description: "PDF parsing demonstration for iOS",
                stars: 2,
                language: "Objective-C",
                url: "https://github.com/aryansbtloe/PDFParsingDemo"
            },
            {
                name: "awesome-cto",
                description: "Curated resources for CTOs in startups",
                stars: 1,
                language: null,
                url: "https://github.com/aryansbtloe/awesome-cto"
            },
            {
                name: "aryansbtloe.github.io",
                description: "Personal portfolio website",
                stars: 0,
                language: "HTML",
                url: "https://github.com/aryansbtloe/aryansbtloe.github.io"
            }
        ],
        writing: [
            {
                title: "Working with blocks in iOS",
                description: "Technical deep-dive into block usage patterns",
                url: "http://aryans00007.wordpress.com/all-about-blocks-in-ios/"
            },
            {
                title: "Essentials online tools for developers",
                description: "Curated developer tools and resources",
                url: "http://essentialsonlinetools.wordpress.com/"
            },
            {
                title: "On Device console for iOS developers",
                description: "Debugging utilities for iOS development",
                url: "http://ondeviceconsole.wordpress.com/"
            }
        ]
    },

    // Community Platforms
    community: [
        {
            name: "LinkedIn",
            icon: "linkedin",
            description: "Professional networking and career updates",
            url: "https://www.linkedin.com/in/256261/"
        },
        {
            name: "GitHub",
            icon: "github",
            description: "Open source projects and code contributions",
            url: "https://github.com/aryansbtloe"
        },
        {
            name: "App Store",
            icon: "appstore",
            description: "18 published apps with 4.5+ average rating",
            url: "https://apps.apple.com/us/developer/alok-singh/id1508795536"
        }
    ],

    // Contact Methods
    contact: [
        {
            type: "Email",
            icon: "email",
            value: "alok.singh.confident@gmail.com",
            link: "mailto:alok.singh.confident@gmail.com"
        },
        {
            type: "LinkedIn",
            icon: "linkedin",
            value: "linkedin.com/in/256261",
            link: "https://www.linkedin.com/in/256261/"
        },
        {
            type: "GitHub",
            icon: "github",
            value: "github.com/aryansbtloe",
            link: "https://github.com/aryansbtloe"
        }
    ]
};

// Export default for easy importing
export default portfolioData;

