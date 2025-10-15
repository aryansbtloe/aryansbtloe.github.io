/**
 * Portfolio Data Configuration
 * Single source of truth for all content
 * Update this file to modify portfolio content
 */

export const portfolioData = {
    // Personal Information
    personal: {
        name: "Alok Singh",
        jobTitle: "Ex-Grab · Senior Software Engineer",
        company: "Grab",
        location: "Gurugram, India",
        phone: "+91 8287757210",
        email: "alok.singh.confident@gmail.com",
        tagline: "5 years at Grab. iOS, Android, web, and backend — 15+ years, 50+ apps.",
        resumeFile: "alok.singh.ios.resume.pdf",
        logo: "AS",
        
        // Experience Summary
        totalExperience: "15+ Years",
        experienceBreakdown: {
            ios: "15+ Years",
            android: "Kotlin / Compose / KMP",
            web: "React Native, HTML/JS",
            backend: "Java / Spring Boot, REST",
            swift: "8+ Years",
            objectiveC: "7+ Years",
            flutter: "1+ Years",
            macos: "2+ Years",
            symbian: "2+ Years (C++)"
        },
        education: "B. Tech, ECE · SCITM, Semiliguda",
        
        // SEO & Meta
        description: "SDE 4 at PRISM. 15+ years shipping iOS, Android, web, and backend. AI-native vibe coder. Open to full-time roles.",
        url: "https://bestlatestapps.com/alok/",
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
    
    // Detailed Technical Skills
    technicalSkills: {
        languages: ["Swift", "Kotlin", "Objective-C", "Java", "JavaScript", "C++", "C"],
        platforms: ["iOS", "Android", "Web", "Backend", "macOS", "React Native", "Flutter", "Spring Boot"],
        databases: ["SQLite", "Core Data", "Realm", "MySQL"],
        tools: ["Xcode", "IntelliJ", "Carbide C++", "Qt Creator", "VS Code", "Charles", "Postman", "Mocky", "Zwoptex", "Photoshop"],
        analytics: ["Google Analytics", "Moengage", "Singular", "Firebase", "Metabase", "DataDog"],
        cicd: ["Fastlane", "SonarCube", "GitHub Actions", "Xcode Cloud"]
    },

    // Products Worked For
    products: [
        {
            name: "Grab",
            logo: "logos/companies/grab.png",
            type: "Super App · E‑commerce · 2021–2026",
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
            logo: "logos/companies/oyo.png",
            type: "Hospitality · Consumer App · via PRISM",
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
            logo: "logos/companies/kohls.png",
            type: "Retail · E‑commerce · via GlobalLogic",
            highlights: [
                "Associate Consultant on the Kohl's shopping app",
                "Performance optimizations and feature work"
            ],
            rating: 5.0,
            ratingCount: "40.5K+",
            link: "https://goo.gl/knMyzL"
        }
    ],

    // Work Experience
    experience: [
        {
            company: "PRISM",
            logo: "logos/companies/prism.png",
            title: "SDE 4",
            period: "Apr 2026 – Present",
            location: "Gurugram, India",
            type: "Full-time",
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
            type: "Full-time",
            featured: true,
            featuredLabel: "5 years · primary experience",
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
            company: "PRISM",
            logo: "logos/companies/prism.png",
            title: "SDE 2 → SDE 3 · iOS, Backend",
            period: "Nov 2018 – Jan 2021",
            location: "Gurugram, India",
            type: "Full-time",
            note: "Product: OYO Rooms consumer iOS",
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
            logo: "logos/companies/globallogic.png",
            title: "Associate Consultant",
            period: "Oct 2017 – Oct 2018",
            location: "Noida, India",
            type: "Full-time",
            note: "Client: Kohl's e-commerce iOS",
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
            title: "Sr. iOS Developer Lead",
            period: "Feb 2016 – Sep 2017",
            location: "Gurugram, India",
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
            period: "Feb 2014 – Jan 2016",
            location: "Noida, India",
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
            title: "Sr. iOS Developer",
            period: "Mar 2013 – Feb 2014",
            location: "Jaipur, India",
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
        bio: "Ex-Grab · AI-native engineer · Gurugram, India",
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
            description: "24 personal App Store apps · 3,700+ ratings",
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

